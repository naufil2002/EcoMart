const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://naufilcoder:9175@cluster0.wv8mx.mongodb.net/Shopperr', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

// Middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ errors: 'Please authenticate using a valid token' });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || 'secret_ecom');
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: 'Invalid token' });
    }
};

// Routes
app.get('/', (req, res) => {
    res.send('Express App is Running');
});

// Signup Route
app.post('/signup', async (req, res) => {
    try {
        let existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ success: false, errors: 'User already exists with the same email address' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            cartData: {}
        });

        await user.save();

        const token = jwt.sign(
            { user: { id: user.id } },
            process.env.JWT_SECRET || 'secret_ecom',
            { expiresIn: '1h' }
        );

        res.json({ success: true, token });

    } catch (error) {
        console.error('Error during signup:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (isMatch) {
                const token = jwt.sign(
                    { user: { id: user.id } },
                    process.env.JWT_SECRET || 'secret_ecom',
                    { expiresIn: '1h' }
                );
                res.json({ success: true, token, cartData: user.cartData });  // Send cartData with login response
            } else {
                res.status(401).json({ success: false, errors: "Incorrect password" });
            }
        } else {
            res.status(404).json({ success: false, errors: "User not found" });
        }
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

// Logout Route
app.post('/logout', fetchUser, async (req, res) => {
    try {
        res.json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        console.error('Error during logout:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});



// Start Server
app.listen(port, () => {
    console.log('Server Running on Port ' + port);
});
