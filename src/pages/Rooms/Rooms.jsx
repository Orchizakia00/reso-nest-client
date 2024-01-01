import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Room from "./Room";

const Rooms = () => {

    const roomsData = useLoaderData();

    const [rooms, setRooms] = useState(roomsData);

    const initialAvailableRooms = rooms.filter(room => room.availability === true);
    // console.log(initialAvailableRooms);

    const [availableRooms, setAvailableRooms] = useState(initialAvailableRooms.length);

    const handleSortByPriceLtH = () => {
        const sortedRooms = [...rooms].sort((a, b) => a.price - b.price);
        setRooms(sortedRooms);
    };
    const handleSortByPriceHtL = () => {
        const sortedRooms = [...rooms].sort((a, b) => b.price - a.price);
        setRooms(sortedRooms);
    };




    useEffect(() => {
        fetch('https://reso-nest-server.vercel.app/bookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const bookedRoomsIds = data.map(bookedRoom => bookedRoom.roomId);

                const roomIds = rooms.map(room => room._id);

                const hasBookedRooms = roomIds.some(roomId => bookedRoomsIds.includes(roomId));

                if (hasBookedRooms) {
                    const availableRooms = roomIds.length - bookedRoomsIds.length;
                    setAvailableRooms(availableRooms);
                }
            })
    }, [rooms])


    return (
        <div className="mb-16 w-full px-5 mx-auto">
            <Helmet>
                <title>ResoNest | Rooms</title>
            </Helmet>
            <div className="hero h-[50vh] rounded-xl mb-24" style={{ backgroundImage: 'url(https://i.ibb.co/xzQ7QTh/modern-lamp-illuminates-elegant-living-room-decor-generated-by-ai-188544-31714.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Our Rooms</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mb-8">
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn m-1 normal-case">Filter By Price</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={handleSortByPriceLtH}>Low to High</a></li>
                        <li><a onClick={handleSortByPriceHtL}>High to Low</a></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <p><span className="font-bold">Available Rooms:</span> {availableRooms} </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>

        </div>
    );
};

export default Rooms;