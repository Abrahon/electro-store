import { useLoaderData, useParams } from "react-router-dom";
import products from '../../../public/products.json'
import ReviewForm from "../ReviewForm/ReviewForm";

const ProductDetails = () => {

    const { id, name, description, image ,price} = useParams();
    console.log(name);


    return (
        <div>
            <section>

                <div className='grid lg:grid-cols-2 w-full p-10'>
                    <div className='m-10'>
                        <img src={image} alt="" className="w-full rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-orange-600 mb-5 mt-5'>{name}</h2>
                        <p>{description}</p>
                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

                    </div>

                </div>
            </section>
            <ReviewForm></ReviewForm>
        </div>
    );
};

export default ProductDetails;