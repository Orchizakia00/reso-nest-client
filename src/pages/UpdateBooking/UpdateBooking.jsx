import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UpdateBooking = () => {

    const { user } = useAuth();
    const room = useLoaderData();
    const { roomTitle, price, _id, date, duration, phone } = room;
    console.log(_id);

    const handleUpdateBooking = e => {
        e.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const duration = form.duration.value;
        const phone = form.phone.value;
        const amount = form.amount.value;

        const updatedOrder = {
            customerName: name,
            email,
            date,
            duration,
            phone,
            price: amount,
        }
        console.log(updatedOrder);

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('Product updated successfully!')
                }
            })
    }

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-16">Update: {roomTitle} </h1>
            <form onSubmit={handleUpdateBooking} className="card-body">
                <div className="flex gap-4">
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

                <div className="flex gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Pick Date" defaultValue={date} name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Duration</span>
                        </label>
                        <input type="text" placeholder="Duration" defaultValue={duration} name="duration" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Phone No</span>
                        </label>
                        <input type="text" placeholder="Phone No" defaultValue={phone} name="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} name="amount" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-accent normal-case">Update Booking</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBooking;