/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Room from "../../Rooms/Room";


const Featured = ({ rooms }) => {



    return (
        <div className="mb-16">
            <h1 className="text-center text-4xl font-bold mb-16">Featured Rooms</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms.filter(room => room.room_no >= 101 && room.room_no <= 106)
                        .map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
            <div className="text-center">
                <Link to={'/rooms'}><button className="btn btn-accent normal-case my-12">See All</button></Link>
            </div>
        </div>
    );
};

export default Featured;