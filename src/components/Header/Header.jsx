import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="navbar bg-stone-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='text-lg font-semibold' to="/">Home</Link></li>
                        <li><Link className='text-lg font-semibold' to="/blog">Blog</Link></li>
                        <li><Link className='text-lg font-semibold' to="/login">Login</Link></li>
                        <li><Link className='text-lg font-semibold' to="/register">Register</Link></li>
                    </ul>
                </div>
                <Link to="/" className="font-serif font-bold text-cyan-500 text-3xl pl-5">Chef's Choice</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li><Link className='text-lg font-semibold' to="/">Home</Link></li>
                    <li><Link className='text-lg font-semibold' to="/blog">Blog</Link></li>
                    <li><Link className='text-lg font-semibold' to="/login">Login</Link></li>
                    <li><Link className='text-lg font-semibold' to="/register">Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end pr-5">
                <p className='pr-5'><FaUser size={30}></FaUser></p>
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Header;