import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const CheckOut = () => {

    const room = useLoaderData();
    const { title, availability, price, img, _id } = room;
    const [availableRooms, setAvailableRooms] = useState([]);
    const [isRoomAvailable, setIsRoomAvailable] = useState(availability);
    const { user } = useAuth();

    // if (availability !== true) {
    //     return <div className="min-h-screen">
    //         <h1 className="text-center text-4xl font-bold mb-16">Book: {title} </h1>
    //         <p className="text-center">Sorry! Room is not available!</p>
    //     </div>
    // }

    // available rooms
    useEffect(() => {
        fetch(`http://localhost:5000/rooms`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const availableRooms = data.filter(room => room.availability === true);
                setAvailableRooms(availableRooms);
            })
    }, [])

    const handleConfirmBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const duration = form.duration.value;
        const phone = form.phone.value;
        const amount = form.amount.value;

        const order = {
            customerName: name,
            roomTitle: title,
            roomImg: img,
            roomId: _id,
            email,
            date,
            duration,
            phone,
            price: amount,
        }
        console.log(order);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsRoomAvailable(false);
                toast.success('Your Booking is Successful!');
                // if (data.success) {
                //     // Filter out the booked room from available rooms
                //     const updatedAvailableRooms = availableRooms.length - 1;
                //     setAvailableRooms(updatedAvailableRooms);
                //     setIsRoomAvailable(false);
                //     toast.success('Your Booking is Successful!');
                // }
            });

    }



    if (!isRoomAvailable) {
        return (
            <div className="min-h-screen">
                <h1 className="text-center text-4xl font-bold mb-16">Book: {title} </h1>
                <p className="text-center">Sorry! This room is already booked!</p>
            </div>
        );
    }



    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-16">Book: {title} </h1>
            
            <div className="available-rooms">
                <h2 className="text-2xl font-bold mb-4">Available Rooms: {availableRooms.length} </h2>
            </div>

            <form onSubmit={handleConfirmBooking} className="card-body">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Pick Date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Duration</span>
                        </label>
                        <input type="text" placeholder="Duration" name="duration" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Phone No</span>
                        </label>
                        <input type="text" placeholder="Phone No" name="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} name="amount" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-accent normal-case">Confirm Booking</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;