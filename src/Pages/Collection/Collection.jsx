import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopProvider'
import Product from '../../Pages/Home/Product/Product';
import ProductCard from '../Home/ProductCard/ProductCard';

const Collection = () => {
    const{products} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false)
    const [categoryItem, setCategoryItem] = useState('All')

    const handleCategoryChange = (category) => {
        setCategoryItem(category);
      };
    
      // Filtered products based on selected category
      const filteredProducts = categoryItem === 'All' ? products : products.filter(product => product.category === categoryItem);
        // setCategoryItem(products)
    

  return (
    
         <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t mt-10 '>
        <div className='w-60'>
            <div className={`border border-gray-300 py-10 mx-auto px-4 ${showFilter? '': 'hidden'} sm:block`}>
                <p className='font-semibold text-xl mb-6'>Category</p>
                <div className='w-full space-y-4 mx-auto'>
                    {/* <button className='bg-black text-white font-semibod w-full py-1' onClick={()=>handleCategoryChange(products)}>All</button> */}
                    <button className='bg-black text-white font-semibod w-full py-1' onClick={()=>handleCategoryChange('TV')}>TV</button>
                    <button className='bg-black text-white w-full py-1' onClick={()=>handleCategoryChange('Laptop')}>LAPTOP</button>
                    <button className='bg-black text-white w-full py-1' onClick={()=>handleCategoryChange('Camera')}>CAMERA</button>
                    {/* <button className='bg-black text-white w-full py-1' onClick={()=>filteProduct('mobile')}>MOBILE</button> */}
                    <button className='bg-black text-white w-full py-1' onClick={()=>handleCategoryChange('Phone')}>PHONE</button>
                    <button className='bg-black text-white w-full py-1' onClick={()=>handleCategoryChange('Headphone')}>HEADPHONE</button>
                    <button className='bg-black text-white w-full py-1' onClick={()=>handleCategoryChange('Watch')}>WATCH</button>
                   
                  
                </div>
            </div>
        </div>
        {/* Right side */}
        <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <h1 className='uppercase text-center text-2xl'> all collection</h1>
                <select className='border-2 border-gray-300 text-sm px-2'>
                    <option value="relavent">Relavent</option>
                    <option value="low-high">Low To High</option>
                    <option value="high-low">High To Low</option>
                </select>

            </div>
            {/* map products */}
            
            <div className="grid grid-cols-1 sx:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-10 ">
        {
         filteredProducts?.slice(0,20).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
            
        </div>
    </div>
    
  )
}

export default Collection