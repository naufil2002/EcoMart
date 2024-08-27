import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  window.scrollTo(0, 0);
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}
