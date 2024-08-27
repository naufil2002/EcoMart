import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import { Shop } from "./Pages/Shop";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
// Import videos
import men_banner from './Components/Assests/men_banner.MOV';
import women_banner from './Components/Assests/women_banner.MOV';
import kid_banner from './Components/Assests/kid_banner.MOV';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="pt-16"> {/* Adjust '16' if necessary */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" isVideo={true} />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" isVideo={true} />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" isVideo={true} />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
