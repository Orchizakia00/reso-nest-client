/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { Link } from "react-router-dom";

const BookingRow = ({ booking, handleDelete }) => {
    // const [roomId, setRoomId] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }, []);

    


    const { roomImg, _id, phone, email, customerName, date, duration, roomId } = booking;

    const bookingRoomId = roomId;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask w-[100px] h-[100px]">
                        {
                            roomImg && <img src={roomImg} alt={booking.roomTitle} />
                        }
                    </div>
                </div>
            </td>
            <td>{booking.roomTitle}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">Email: {email}</div>
                        <div className="text-sm opacity-50">Phone: {phone}</div>
                    </div>
                </div>
            </td>
            <td>{date}</td>
            <td>{duration}</td>
            <td>
                <Link to={`/updateBooking/${_id}`}>
                    <button className="btn btn-circle btn-outline normal-case mr-2 ">Edit</button>
                </Link>
                <button onClick={() => handleDelete(_id, date, bookingRoomId)} className="btn btn-circle btn-outline normal-case">Delete</button>
            </td>
            <td>
                <Link to={`/review/${_id}`}>
                    <button className="btn btn-accent normal-case">Write a Review</button>
                </Link>
            </td>
        </tr>
    );
};

export default BookingRow;