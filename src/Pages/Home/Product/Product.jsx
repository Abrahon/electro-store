import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const[page,setPage] = useState(1)

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredProducts =
    categoryFilter === "all"
      ? products
      : products.filter((product) => product.category === categoryFilter);
  const categories = [...new Set(products.map((product) => product.category))];

  const setPageHandeler = (selectedPage)=>{
    if(
        selectedPage>=1 &&
        selectedPage<=products.length/10 ||
        selectedPage !==page
    )
    setPage(selectedPage)
  }

  return (
    <div className="my-20">
    <h1>total: {products.length}</h1>
      <select value={categoryFilter} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sx:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-10 ">
        {filteredProducts?.slice(page*10 - 10, page*10).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      {
       products.length>0 && <div className="paigination">
       
        
      <div className=" space-x-4 font-bold cursor-pointer">
      <span className={page>1? " " : "opacity-0"}  onClick={()=>setPageHandeler(page-1)}>Prev</span>
      {
            [...Array(Math.ceil(products.length / 10))].map((_, i) => {
                return <span  onClick={()=>setPageHandeler(i+1)} className={page === i+1 ? "px-4 py-2 bg-green-700" :""}
                 key={i}>
                    {i + 1}
                    </span>;
            })
            
        }
        <span className={page<products.length/10 ? " " : "opacity-0"} onClick={()=>setPageHandeler(page+1)}>Next</span>
        </div>
        
       </div>
      }
      </div>

  );
};

export default Product;
