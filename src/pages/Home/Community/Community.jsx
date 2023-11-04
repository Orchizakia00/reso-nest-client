
const Community = () => {
    return (
        <div className="mb-16 mt-8">
            <h1 className="text-center text-4xl font-bold mb-10">Our Community</h1>
            <div className="flex bg-base-200 rounded-xl p-10">
                <div className="flex-1 text-left flex items-center">
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Before you go, Subscribe to Our Newsletter!</h1>
                        <p>Stay in the loop! Sign up for our newsletter and receive exclusive offers, <br /> travel tips, and destination updates delivered directly to your inbox.</p>
                    </div>
                </div>

                <div className="flex-1">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Community;