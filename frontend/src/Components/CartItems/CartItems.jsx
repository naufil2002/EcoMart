import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png'; 

const CartItems = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, clearCart } = useContext(ShopContext);

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart(); // Clears the cart
    window.scrollTo(0, 0);
  };

  const hasItems = Object.values(cartItems).some(quantity => quantity > 0);

  return (
    <div className='cartitems container'>
      {orderPlaced ? (
        <div className="order-success">
          <h2>Order placed successfully!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      ) : !hasItems ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Add some products to your cart to proceed.</p>
        </div>
      ) : (
        <>
          <h1 className='text-center mb-5 font-bold'>CART ITEMS</h1>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format">
                    <img className='carticon-product-icon' src={e.image} alt="" />
                    <p className='fontsize'>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='cursor-pointer' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems-down container">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-items">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems_promocode text-center mt-5">
              <p>If you have a promo code, Enter it here!</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItems;
