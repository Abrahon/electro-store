import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';

const ProductsItem = ({product, currency}) => {
    const {image,name,price,_id} = product;
    const{addToCart} = useContext(CartContext)

  return (
    <div className="container mx-auto ">
            
    <div className="shadow-2xl p-2  w-full rounded-lg" data-aos="fade-up"   >
       <Link to={`/productdetails/${_id}`}>
       <div className="category-thumb">
        <img className="w-full h-48 object-cover relative z-0 transition-all duration-200 hover:scale-110 mx-auto" src={image} alt="image" />
        </div>
        </Link>
        <div className="text-center m-2">
            <h1 className="font-semibold text-gray-500 hover:text-red-600">{name}</h1>
            <p className="text-lg text-red-600"> <span className="font-semibold">${price}</span></p>
            <p className="text-lg text-red-600"> <span className="font-semibold">${currency}</span></p>
        </div>
       
       
       <button onClick={()=>addToCart(product,_id)} className="bg-blue-500 text-white font-bold py-1 px-4 rounded mx-auto block">Add To Cart</button>
       {/* <button onClick={()=>addWhisList(product)} className="text-red-500 hover:text-green-500 py-1 px-2 mt-2 mx-auto block"><FaHeart></FaHeart> </button> */}

    </div>
</div>
  )
}

export default ProductsItem