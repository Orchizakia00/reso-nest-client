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
            <div className="bg-base-200 p-28">
                <p className="text-center text-3xl font-bold text-orange-500">ResoNest || Rooms</p>
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