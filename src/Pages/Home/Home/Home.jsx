import BestSeller from "../../../Components/BestSeller/BestSeller";
import LatestCollection from "../../../Components/LatestCollection/LatestCollection";
import ProductsItem from "../../../Components/ProductsItem/ProductsItem";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <LatestCollection></LatestCollection>
            <BestSeller></BestSeller>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Home;