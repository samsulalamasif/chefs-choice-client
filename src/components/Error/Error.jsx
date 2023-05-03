import React from 'react';
import errorImg from "../../assets/error.jpg"
import { Link, useRouteError } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Error = () => {
    const { error, status } = useRouteError();
    return (
        <div className="hero h-screen" style={{ backgroundImage: `url(${errorImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-7xl mb-5 text-cyan-200 font-bold ">Error-404</h1>
                    <Marquee speed={50}>
                        <h1 className='text-black text-2xl mb-5 font-bold'>
                            Page Not Found......{error?.message}...........</h1>
                    </Marquee>
                    <Link
                        to="/"

                    >
                        <button className='btn btn-outline'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;




