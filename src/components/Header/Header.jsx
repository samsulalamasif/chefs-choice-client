import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-stone-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ActiveLink className='text-lg font-semibold' to="/">Home</ActiveLink></li>
                        <li><ActiveLink className='text-lg font-semibold' to="/blog">Blog</ActiveLink></li>
                        <li><ActiveLink className='text-lg font-semibold' to="/login">Login</ActiveLink></li>
                        <li><ActiveLink className='text-lg font-semibold' to="/register">Register</ActiveLink></li>
                    </ul>
                </div>
                <Link to="/" className="font-serif font-bold text-cyan-500 text-3xl pl-5">Chef's Choice</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li><ActiveLink className='text-lg font-semibold' to="/">Home</ActiveLink></li>
                    <li><ActiveLink className='text-4xl font-bold' to="/blog">Blog</ActiveLink></li>
                    <li><ActiveLink className='text-lg font-semibold' to="/login">Login</ActiveLink></li>
                    <li><ActiveLink className='text-lg font-semibold' to="/register">Register</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end pr-5">
                {user && <div className="tooltip tooltip-left" data-tip={user.displayName}>
                    <img className='w-14 h-14 p-2 rounded-full' src={user.photoURL} />
                </div>}

                {user ?
                    <button onClick={handleLogOut} className='btn btn-outline'>Logout</button> :
                    <Link to="/login">
                        <button className='btn btn-outline'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;