import React, { useEffect, useRef, useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, image, new_price, old_price }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`item ${isVisible ? 'item-visited' : ''}`}
    >
      <Link to={`/product/${id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          className="item-image"
          src={image}
          alt={name}
          loading="lazy"
          srcSet={`${image}?w=400 400w, ${image}?w=800 800w`}
          sizes="(max-width: 600px) 400px, 800px"
        />
      </Link>
      <div className="item-name">{name}</div>
      <div className='d-flex align-items-center justify-between'>
        <div className="item-prices">
          {old_price && <span className="item-price-old">${old_price}</span>}
          <span className="item-price-new">${new_price}</span>
        </div>
        <Link to={`/product/${id}`}>
          <button className="px-3 mt-3 py-1 mb-2 font-medium bg-slate-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};
