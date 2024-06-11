import { useContext, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link} from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";


const ProductCard = ({product}) => {
    const{name,image,price, _id} = product;
    const{addToCart} = useContext(CartContext)
    const[whishList, setWhishList] = useState([])

    console.log(_id)

   
    useEffect(()=>{
        AOS.init({duration:"2000"});
    },[])

    const addWhisList=(product)=>{
        setWhishList((prevWhishList)=>[...prevWhishList,product])
        console.log(product)

    }

    return (
        <div className="container mx-auto">
            
            <div className="shadow-2xl p-2 h-full w-full rounded-lg" data-aos="fade-up"   >
               <Link to={`/productdetails/${_id}`}>
               <div className="object-cover">
                <img className="h-full h-auto relative z-0 transition-all duration-200 hover:scale-110" src={image} alt="image" />
                </div>
                <div className="text-center mb-10 mt-2">
                    <h1 className="font-semibold text-gray-500 hover:text-red-600">{name}</h1>
                    <p className="text-lg text-red-600"> <span className="font-semibold">${price}</span></p>
                </div>
               </Link>
               
               <button onClick={()=>addToCart(product,_id)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-auto block">Add To Cart</button>
               <button onClick={()=>addWhisList(product)} className="bg-green-500 text-white py-1 px-2 mt-2 mx-auto block">Add To WhishList</button>

            </div>
        </div>
    );
};

export default ProductCard;