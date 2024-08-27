import React from "react";
import "./Offers.css";
import exclusive_image from '../Assests/exclusive_image.png';

export const Offers = () => {
  return (
    <div className=" offers pt-3 container">
      <div className="content mt-3 text-center">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <h5>ONLY ON BEST SELLERS PRODUCTS</h5>
        <button className="px-6 mt-3 py-2 font-medium bg-slate-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Check Now
      </button>
      </div>
      <div className=""><img src={exclusive_image} alt="" /></div>
    </div>
  );
};
