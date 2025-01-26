import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopProvider'
import ProductsItem from '../ProductsItem/ProductsItem'
import BestItem from './BestItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    
    const [bestSeller, setBestSeller] = useState([])
    // console.log(bestSeller)

    useEffect(()=>{
        const bestProduct = products?.filter((item)=>(item.bestSeller));
        console.log(bestProduct)
        setBestSeller(bestProduct.slice(0,5))
        
    },[products])
    
    

  return (
    <div className='my-10'>
        <h1 className='text-center py-8 text-3xl uppercase'>best seller_</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {
                bestSeller.map((product)=><ProductsItem
                key={product._id} 
                product={product}
                ></ProductsItem>)
            }
        </div>
    </div>
  )
}

export default BestSeller