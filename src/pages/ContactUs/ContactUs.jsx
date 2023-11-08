import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>ResoNest | Contact Us</title>
            </Helmet>
            <div className="mb-16 hero h-[50vh] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/HHT6Rhq/beautiful-umbrella-chair-around-swimming-pool-hotel-resort-1203-11776.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Contact Us</h1>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl font-bold mb-6">Send Your Message</h1>
            <form className="card-body">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Physical Address</span>
                        </label>
                        <input type="text" placeholder="Your Address" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Phone No</span>
                        </label>
                        <input type="text" placeholder="Phone No" name="phone" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-accent normal-case">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;