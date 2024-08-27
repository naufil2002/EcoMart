import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assests/breadcrum_arrow.png';

const Breadcrums = (props) => {
    const { product } = props;
    return (
        <div className='breadcrums d-flex align-items-center flex-wrap bg-white p-2'>
            <span>HOME</span>
            <img src={arrow_icon} alt="arrow" className='arrow-icon' />
            <span>SHOP</span>
            <img src={arrow_icon} alt="arrow" className='arrow-icon' />
            <span>{product.category}</span>
            <img src={arrow_icon} alt="arrow" className='arrow-icon' />
            <span>{product.name}</span>
        </div>
    );
}

export default Breadcrums;
