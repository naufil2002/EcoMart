import React, { useContext, useEffect, useRef } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assests/dropdown_icon.png";
import { Item } from "../Components/Item/Item";

const ShopCategory = (props) => {
  window.scrollTo(0, 0);
  const { all_product } = useContext(ShopContext);
  const bannerContainerRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      if (bannerContainerRef.current) {
        bannerContainerRef.current.classList.add('loaded');
      }
    };

    const bannerContainer = bannerContainerRef.current;

    if (bannerContainer) {
      const video = bannerContainer.querySelector('video');
      const image = bannerContainer.querySelector('img');

      if (video) {
        video.addEventListener('loadeddata', handleLoad);
        return () => video.removeEventListener('loadeddata', handleLoad);
      } else if (image) {
        image.addEventListener('load', handleLoad);
        return () => image.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  return (
    <div className="shop-category">
      <div className="banner-container" ref={bannerContainerRef}>
        {props.isVideo ? (
          <>
            <video className="banner-video" autoPlay loop muted loading="lazy">
              <source src={props.banner} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="banner-overlay">
              <div className="banner-text">
                <h1>Exclusive Discounts</h1>
                <p>Up to 50% off on selected items!</p>
              </div>
            </div>
          </>
        ) : (
          <img src={props.banner} alt={`${props.category} banner`} className="banner-image" />
        )}
      </div>
      
      <div className="shopcategory-indexSort container">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategorySort d-flex align-items-center">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      
      <div className="shopcategory-products container">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      
      <div className="flex justify-center mt-20 mb-20">
        <button className="px-6 py-2 font-medium bg-slate-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Latest Collection
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
