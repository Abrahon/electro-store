import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
// import Products from '../../../../public/products.json'


const Product = () => {

    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 my-10">
            {
                products?.map(product=><ProductCard
                key={product.id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Product;
