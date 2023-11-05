import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const { login, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success('Logged In Successfully!');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-20 mt-10">
            <div className="flex-1">
                <img src="https://i.ibb.co/fqDh04v/demand-insurance-service-digital-insurer-mobile-app-innovative-business-model-female-customer-orderi.jpg" alt=""
                    className="rounded-xl" />
            </div>
            <div className="flex-1 flex items-center">
                <div className="flex-1">
                    <h1 className="text-center text-5xl font-bold mb-10">Login To Your Account</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                                <p className="text-center">Do not have an account?
                                    <Link to={'/register'}><span className="text-orange-500 font-bold"> Register Now</span></Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control my-3">
                            <button className="btn btn-accent mb-5 normal-case">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-ghost normal-case"><FcGoogle></FcGoogle> Login With Google</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;