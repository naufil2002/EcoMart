import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // State for checkbox
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [redirecting, setRedirecting] = useState(false); // State to manage redirection
  const navigate = useNavigate(); // Initialize navigate

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validateForm = () => {
    let errorMsg = "";

    if (!formData.email || !formData.password) {
      errorMsg = "Email and Password are required.";
    } else if (state === "Sign Up" && !formData.name) {
      errorMsg = "All fields are required.";
    } else if (!termsAccepted) {
      errorMsg = "You must accept the terms of use and privacy policy.";
    }

    if (errorMsg) {
      setError(errorMsg);
      return false;
    }

    setError("");
    return true;
  };

  const handleAuth = async (endpoint) => {
    if (!validateForm()) return;

    setLoading(true); // Show loading indicator

    try {
      const response = await fetch(`https://ecomart-1-sjgs.onrender.com/${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        // Delay the navigation to show loading for 2 seconds
        setTimeout(() => {
          navigate('/cart'); // Navigate to cart after delay
        }, 300);
      } else {
        setError(data.error || `${state} failed.`);
        setLoading(false); // Hide loading indicator if error occurs
      }
    } catch (error) {
      console.error(`${state} error:`, error);
      setError('An unexpected error occurred. Please try again later.');
      setLoading(false); // Hide loading indicator if an error occurs
    }
  };

  window.scrollTo(0, 0);

  return (
    <div className="relative flex justify-center items-center p-3 min-h-screen bg-slate-400 transition-opacity">
      <div className={`p-4 bg-white rounded shadow-sm transition-opacity`} style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="mb-4 text-center">{state}</h3>
        {error && <Alert variant="danger" className="text-center">{error}</Alert>}
        <Form>
          {state === "Sign Up" && (
            <Form.Group controlId="formName">
              <Form.Control
                name="name"
                value={formData.name}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
                className="mb-3"
                required
                disabled={loading} // Disable input while loading
              />
            </Form.Group>
          )}

          <Form.Group controlId="formEmail">
            <Form.Control
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
              className="mb-3"
              required
              disabled={loading} // Disable input while loading
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className="mb-4"
              required
              disabled={loading} // Disable input while loading
            />
          </Form.Group>

          <Form.Group controlId="termsCheck" className="mt-3 mb-3">
            <Form.Check
              type="checkbox"
              label={ <small>By continuing, I agree to the terms of use & privacy policy.</small> }
              checked={termsAccepted}
              onChange={handleCheckboxChange}
              required
              disabled={loading} // Disable input while loading
            />
          </Form.Group>

          <div className="text-center">
            <Button
              onClick={() => handleAuth(state === 'Login' ? 'login' : 'signup')}
              variant="danger"
              type="button"
              className="w-100"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <Spinner animation="border" size="sm" className="text-white" />
              ) : (
                'Continue'
              )}
            </Button>
          </div>

          {state === "Sign Up" ? (
            <div className="text-center mt-3">
              <small>
                Already have an account?{" "}
                <span onClick={() => { setState('Login') }} className="text-red-600 cursor-pointer">Login here</span>
              </small>
            </div>
          ) : (
            <div className="text-center mt-3">
              <small>
                Create an account?{" "}
                <span onClick={() => { setState('Sign Up') }} className="text-red-600 cursor-pointer">Click here</span>
              </small>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default LoginSignup;
