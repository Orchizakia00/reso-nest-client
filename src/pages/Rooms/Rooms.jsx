import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Room from "./Room";

const Rooms = () => {

    const rooms = useLoaderData();

    return (
        <div className="mb-16">
            <Helmet>
                <title>ResoNest | Rooms</title>
            </Helmet>
            <div className="hero h-[50vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/xzQ7QTh/modern-lamp-illuminates-elegant-living-room-decor-generated-by-ai-188544-31714.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">ResoNest || Rooms</h1>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl font-bold my-10">Our Rooms</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;