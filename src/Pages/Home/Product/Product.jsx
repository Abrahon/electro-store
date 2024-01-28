import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Products from '../../../../public/products.json'


const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleFilter=(catItem)=>{
        const filterResult = Products?.filter((product)=>product.category===catItem);
    
        setProducts(filterResult)
        console.log(filterResult)
        
   }

    return (
        <div>
            <div className="px-5 gap-4 text-center grid justify-items-center md:flex justify-center lg:flex justify-center ">
                <button className="btn btn-accent btn-sm gap-2 bg-blue-500 active:bg-blue-600"onClick={()=>handleFilter('laptop')}>Laptop</button>
                <button className="btn btn-secondary btn-sm mx-2" onClick={()=>handleFilter('phone')}>Phone</button>
                <button className="btn btn-accent btn-sm mx-2"onClick={()=>handleFilter('tv')}>Tv</button>
                <button className="btn btn-accent btn-sm mx-2"onClick={()=>handleFilter('headphone')}>Headphone</button>
                <button className="btn btn-accent btn-sm mx-2" onClick={()=>handleFilter('camera')}>Camera</button>
                <button className="btn btn-accent btn-sm mx-2"onClick={()=>handleFilter('watch')}>Watch</button>
            </div>
            <div className="grid grid-cols-1 sx:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 my-10 ">
                {
                    products?.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;
