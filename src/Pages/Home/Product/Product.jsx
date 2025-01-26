import React, { useContext } from 'react'
import { ShopContext } from '../../../context/ShopProvider'
import ProductCard from '../ProductCard/ProductCard.jsx'

const Product = () => {
  const{products} = useContext(ShopContext);
  console.log(products)
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      {/* left side  */}
      <div className='w-[300px] mx-auto text-center'>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus numquam illum eum autem quos laudantium, harum, qui ipsa, libero commodi magnam? Explicabo ut saepe commodi dolorem repudiandae iste. Consequuntur, placeat?</h1>
      </div>
      {/* right side  */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
      {
        products?.map(product=><ProductCard
        key={product._id}
        product={product}
        ></ProductCard>)
      }
    </div>
    </div>
  )
}

export default Product