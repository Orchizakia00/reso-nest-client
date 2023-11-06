import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Room from "./Room";
import { useEffect, useState } from "react";

const Rooms = () => {

    const roomsData = useLoaderData();

    const [rooms, setRooms] = useState(roomsData);
    // const [currentPage, setCurrentPage] = useState(0);
    // const [itemsPerPage, setItemsPerPage] = useState(10);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/rooms?page=${currentPage}&size=${itemsPerPage}`)
    //         .then(res => res.json())
    //         .then(data => setRooms(data))
    // }, [currentPage, itemsPerPage])

    const handleSortByPriceLtH = () => {
        const sortedRooms = [...rooms].sort((a, b) => a.price - b.price);
        setRooms(sortedRooms);
    };
    const handleSortByPriceHtL = () => {
        const sortedRooms = [...rooms].sort((a, b) => b.price - a.price);
        setRooms(sortedRooms);
    };

    // pagination
    // const numberOfPages = Math.ceil(rooms.length / itemsPerPage);

    // const pages = [...Array(numberOfPages).keys()];

    // const handleItemsPerPage = e => {
    //     const val = parseInt(e.target.value);
    //     setItemsPerPage(val);
    //     setCurrentPage(0);
    // }

    // const handlePrev = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // }
    // const handleNext = () => {
    //     if (currentPage < pages.length - 1) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // }


    return (
        <div className="mb-16">
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
            <div className="dropdown dropdown-bottom mb-8">
                <label tabIndex={0} className="btn m-1 normal-case">Filter By Price</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={handleSortByPriceLtH}>Low to High</a></li>
                    <li><a onClick={handleSortByPriceHtL}>High to Low</a></li>
                </ul>
            </div>
            {/* <h1 className="text-center text-4xl font-bold my-10">Our Rooms</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>

            {/* pagination */}
            {/* <div className="mt-10 text-center">
                <p className="mb-4">Current Page: {currentPage} </p>
                <button onClick={handlePrev} className="btn btn-base normal-case">Prev</button>
                {
                    pages.map(page => (
                        <button
                            onClick={() => setCurrentPage(page)}
                            key={page}
                            className={currentPage == page ? 'btn-accent btn mx-2' : 'btn btn-base mx-2'} >
                            {page}
                        </button>
                    ))
                }
                <button onClick={handleNext} className="btn btn-base normal-case">Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div> */}
        </div>
    );
};

export default Rooms;