import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { signIn, google, github } = useContext(AuthContext)
    const [error, setError] = useState('');

    const googleHandler = () => {
        google()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

            })
            .catch(error => {
                setError(error.message);
            })

    }
    const githubHandler = () => {
        github()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError("")
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()

            })
            .catch(error => {
                setError(error.message);
            })
    }





    return (
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text text-red-600">{error}</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Login</button>
                        </div>
                        <span className="label-text">
                            Don't Have an Account? <Link className='text-blue-700' to="/register">Register</Link>
                        </span>

                    </div>
                    <div className='flex flex-col w-48 space-y-3 mx-auto mb-5'>
                        <button onClick={googleHandler} className='btn btn-outline'>
                            <FaGoogle size={15}></FaGoogle>Login with Google</button>
                        <button onClick={githubHandler} className='btn btn-outline'>
                            <FaGithub size={15}></FaGithub>Login with Github</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;