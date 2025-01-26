import React, { useEffect, useState } from 'react';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({ selectedProduct, products }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0 && selectedProduct) {
      // Filter products with the same category but exclude the selected product
      const filteredProducts = products.filter(
        (item) =>
          item.category === selectedProduct.category &&
          item._id !== selectedProduct._id
      );
      console.log(filteredProducts)
      setRelatedProducts(filteredProducts.slice(0, 5)); // Limit to 5 products
    }
  }, [products, selectedProduct]);

  if (relatedProducts.length === 0) {
    return <div>No related products found.</div>;
  }

  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-semibold uppercase">
        Related Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-6">
        {relatedProducts.map((item) => (
          <ProductsItem
            key={item._id}
            product={item}
            onClick={() => navigate(`/product/${item._id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
