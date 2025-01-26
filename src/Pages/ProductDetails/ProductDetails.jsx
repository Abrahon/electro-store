import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { ShopContext } from '../../context/ShopProvider';
import { CartContext } from '../../context/CartProvider';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import ReviewForm from '../../Components/ReviewSection';

const ProductDetails = () => {
  const { _id } = useParams();
  // const { products } = useContext(ShopContext); // Products from ShopContext
  const { addToCart } = useContext(CartContext);

  const [productsData, setProductsData] = useState([]); // Fetched data
  const [selectedProduct, setSelectedProduct] = useState(null); // Product to display

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/product');
        const data = await response.json();
        setProductsData(data);

        // Find selected product from fetched data
        const product = data.find((p) => p._id === _id);
        setSelectedProduct(product);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [_id]);

  // Ensure selectedProduct is valid before rendering
  if (!selectedProduct) {
    return <div>Loading product details...</div>;
  }

  const { name, description, image, price } = selectedProduct;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto">
      <div className="p-3 max-w-7xl m-auto">
        <div className="sm:mt-10 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <img className="w-full" src={image} alt={name} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{name}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify">{description}</p>
              <span className="flex justify-start items-center my-2 text-yellow-400 text-2xl gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="text-3xl text-black font-bold sm:text-2xl">${price}</p>
              <button
                onClick={() => addToCart(selectedProduct, _id)}
                className="uppercase mt-5 bg-black hover:bg-black px-6 py-3 rounded-full text-white font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Review Form */}
        <ReviewForm />
        {/* Related Products */}
        <RelatedProducts selectedProduct={selectedProduct} products={productsData} />
      </div>
    </div>
  );
};

export default ProductDetails;
