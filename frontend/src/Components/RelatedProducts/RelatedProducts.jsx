import React from 'react';
import './RelatedProducts.css';
import data_product from '../Assests/data';
import {Item} from '../Item/Item'

export const RelatedProduct = () => {
  return (
    <div className='relatedproducts container'>
        <h1>Related Products</h1>
        <hr />
        <div>
          {data_product.map((item, i)=>{
            return <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
          })}
        </div>
    </div>
  )
}
