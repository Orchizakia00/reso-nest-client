import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-20 mt-10">
            <div className="flex-1">
                <img src="https://i.ibb.co/gWTTXGG/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt=""
                    className="rounded-xl" />
            </div>
            <div className="flex-1 flex items-center">
                <div className="flex-1">
                    <h1 className="text-center text-5xl font-bold mb-10">Register Now</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label mt-3">
                                <p className="text-center">Already have an account? Please
                                    <Link to={'/login'}><span className="text-orange-500 font-bold"> Login</span></Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <button className="btn btn-accent mb-5 normal-case">Register</button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;