import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CheckOut = () => {

    const room = useLoaderData();
    const { title, availability, price, img, _id } = room;

    const { user } = useAuth();

    if (availability !== true) {
        return <div className="min-h-screen">
            <h1 className="text-center text-4xl font-bold mb-16">Book: {title} </h1>
            <p className="text-center">Sorry! Room is not available!</p>
        </div>
    }

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

        fetch('https://reso-nest-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Your Booking is Successful!');
            });

        // Update room availability 
        fetch(`https://reso-nest-server.vercel.app/rooms/${_id}/updateAvailability`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

    }



    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-16">Book: {title} </h1>
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