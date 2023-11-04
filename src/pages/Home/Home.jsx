import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Discount from "../../components/Discount/Discount";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ResoNest | Home</title>
            </Helmet>
            <Banner></Banner>
            <Discount></Discount>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;