import Sidebar from "../../Shared/Sidebar/Sidebar";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Home;