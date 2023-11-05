import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser } = useAuth();
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const data = {
            name,
            photo,
            email,
            password
        };

        console.log(data);

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer!');
            return;
        }
        else if (!(/[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))) {
            toast.error('Your password should have at least one uppercase letter and a special character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success('You have successfully registered!');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-20 mt-10">
            <div className="flex-1">
                <img src="https://i.ibb.co/gWTTXGG/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-peopl.jpg" alt=""
                    className="rounded-xl" />
            </div>
            <div className="flex-1 flex items-center">
                <div className="flex-1">
                    <h1 className="text-center text-5xl font-bold">Register Now</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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