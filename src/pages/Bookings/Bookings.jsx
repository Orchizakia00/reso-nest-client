import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import BookingRow from "./BookingRow";
import moment from "moment/moment";

const Bookings = () => {

    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDelete = (id, bookingDate) => {

        const currentDate = moment();
        const bookingDateObject = moment(bookingDate);
        const twoDaysFromNow = moment(currentDate).add(3, 'days');


        if (bookingDateObject.isBefore(twoDaysFromNow, 'day')) {
            // If the booking date is within 2 days from the current date
            toast.error('Bookings can only be deleted before 2 days of the booking date.');
        }
        else {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="ml-3 flex-1">
                                <p className="mt-1 text-sm text-gray-500">
                                    Are you sure you want to delete?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => {
                                toast.dismiss(t.id);
                                // Handle deletion logic here
                                fetch(`http://localhost:5000/bookings/${id}`, {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data);
                                        if (data.deletedCount > 0) {
                                            toast.success('Your booking has been deleted successfully');
                                            const remaining = bookings.filter(booking => booking._id !== id);
                                            setBookings(remaining);
                                        }
                                    })
                            }}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ));
        }

    }

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
                            <th>Room Image</th>
                            <th>Room Name</th>
                            <th>Customer Details</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => (
                                <BookingRow
                                    key={booking._id}

                                    booking={booking}
                                    handleDelete={handleDelete}
                                ></BookingRow>
                            ))
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default Bookings;