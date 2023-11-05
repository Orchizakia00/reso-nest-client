import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UpdateBooking = () => {

    const { user } = useAuth();
    const room = useLoaderData();
    const { title, price } = room;

    const handleUpdateBooking = () => {
        
    }

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-16">Book: {title} </h1>
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
                        <input type="date" placeholder="Pick Date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Duration</span>
                        </label>
                        <input type="text" placeholder="Duration" name="duration" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex gap-4">
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

export default UpdateBooking;