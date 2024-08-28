import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay container mt-5'>
        <div className="productdisplay-left">
            <div className="productdisplay-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita provident eligendi, veniam rerum amet unde sapiente asperiores dolorem hic rem?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button
  className='mt-3 mb-3'
  onClick={(e) => {
    e.preventDefault();  // Prevent default behavior
    e.stopPropagation(); // Prevent event bubbling

    addToCart(product.id);  // Add to cart

    // Preserve scroll position
    const currentScrollPosition = window.scrollY;
    setTimeout(() => {
      window.scrollTo({
        top: currentScrollPosition,
        behavior: 'smooth'
      });
    }, 0);
  }}
>
  ADD TO CART
</button>

            <p className='productdisplay-right-category'><span>Category : </span>Women , T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern , T-Latest</p>
        </div>
    </div>
  )
}