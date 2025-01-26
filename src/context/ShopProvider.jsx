import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
// import {products} from '../../public/products.json'

export const ShopContext =  createContext();

const ShopProvider = ({children}) => {
    const [products, setProducts] = useState([])

    
    const fetchData = async()=>{
        await fetch('http://localhost:5000/product')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    }
    useEffect (()=>{
        fetchData()
    },[])

    console.log(products)

    const currency = '$';
    const delivery_fee = 10;


    const shopInfo = {
        products,
        currency,
        delivery_fee,
    }
    console.log(shopInfo)
  return (
    <div>
        <ShopContext.Provider value={shopInfo}>
            {children}
        </ShopContext.Provider>
    </div>
  )
}

export default ShopProvider