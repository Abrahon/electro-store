import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const{name, category,image,price, _id} = product;

    // category of products
    useEffect(()=>{
        AOS.init({duration:"3000"});
    },[])

    return (
        <div className="container mx-auto">
           
            <div className="shadow-2xl p-2 h-full w-full rounded-lg" data-aos="fade-up"   >
               <Link to={`/productdetails/${_id}`}>
               <div className="object-cover">
                <img className="h-full" src={image} alt="image" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{category}</p>
                    <p className="text-xl text-blue-600"> <span className="font-bold">${price}</span></p>

                </div>
               </Link>
            </div>
        </div>
    );
};

export default ProductCard;