// import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";

import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import Sidebar from "../Shared/Sidebar/Sidebar";

const ProductDetails = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const{addToCart} = useContext(CartContext)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        console.log(data);
        const product = data.find((item) => item._id === _id);

        console.log(product);
        setProduct(product);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="flex items-center pt-32 pb-12 lg:py-32 py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[400px] lg:max-w-sm"
              src={product.image}
            />
          </div>
          <div className="flex-1 text-center lg:text-left ">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product.name}
            </h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              totam tempore dolor hic, in rem? Nostrum aliquid assumenda
              asperiores quae sit quibusdam sint atque quasi fugit eaque,
              placeat eius quisquam.
            </p>
            <p className="text-red-500">Price: ${product.price}</p>
            <button onClick={()=>addToCart(_id)} className="bg-primary text-white px-6 py-2 mt-4 rounded-lg">Ad To Cart</button>
          </div>
        </div>
      </div>
      <Sidebar></Sidebar>
    </section>
  );
};

export default ProductDetails;
