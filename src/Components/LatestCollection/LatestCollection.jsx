import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopProvider'
import ProductsItem from '../ProductsItem/ProductsItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const { currency } = useContext(ShopContext)
    console.log(products)
    const [latestProducts,setLatestProducts] = useState([])
    console.log(latestProducts)

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])

    console.log(latestProducts)

  return (
    <div className='my-10'>
        
        <h1 className='text-center py-8 text-3xl uppercase'>latest collection_</h1>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
       {
            latestProducts?.map((product)=><ProductsItem
            key={product._id}
            product={product}
            currency={currency}
            ></ProductsItem>)
        }
       </div>
    </div>
  )
}

export default LatestCollection