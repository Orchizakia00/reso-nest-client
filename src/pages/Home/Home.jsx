import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";
import Testimonials from "./Testimonials/Testimonials";
import Community from "./Community/Community";
import Featured from "./Featured/Featured";
import { useLoaderData } from "react-router-dom";
import Amenities from "./Amenities/Amenities";
import Attractions from "./Attractions/Attractions";
import Membership from "./Membership/Membership";

const Home = () => {

    const rooms = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>ResoNest | Home</title>
            </Helmet>
            <Banner></Banner>
            <Discount></Discount>
            <Featured rooms= {rooms}></Featured>
            <Testimonials></Testimonials>
            <Amenities></Amenities>
            <Community></Community>
            <Attractions></Attractions>
            <Membership></Membership>
        </div>
    );
};

export default Home;