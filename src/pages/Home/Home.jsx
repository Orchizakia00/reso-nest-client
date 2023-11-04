import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ResoNest | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;