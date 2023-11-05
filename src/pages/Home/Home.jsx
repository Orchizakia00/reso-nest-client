import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";
import Testimonials from "./Testimonials/Testimonials";
import Community from "./Community/Community";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ResoNest | Home</title>
            </Helmet>
            <Banner></Banner>
            <Discount></Discount>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Community></Community>
        </div>
    );
};

export default Home;