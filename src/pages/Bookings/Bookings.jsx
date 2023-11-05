import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Bookings = () => {

    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    return (
        <div>
            <Helmet>
                <title>ResoNest | My Bookings</title>
            </Helmet>
            <div className="hero h-[50vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/HHT6Rhq/beautiful-umbrella-chair-around-swimming-pool-hotel-resort-1203-11776.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Your Bookings</h1>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto my-20">
                <table className="table text-x">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Room Name</th>
                            <th>Customer Details</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => (
                                <tr key={booking._id}>
                                    <td>{booking.roomTitle}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{booking.customerName}</div>
                                                <div className="text-sm opacity-50">Email: {booking.email}</div>
                                                <div className="text-sm opacity-50">Phone: {booking.phone}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booking.date}</td>
                                    <td>{booking.duration}</td>
                                    <td>
                                        <button className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default Bookings;