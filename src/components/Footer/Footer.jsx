import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className=" bg-gray-800" >
            <h1 className='text-indigo-400  font-serif font-semibold 
            text-6xl text-center py-6'>Chef's Choice</h1>
            <p className='text-white text-center font-mono'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi <br />
                atque recusandae dicta beatae quod similique, maiores illo, reiciendis ipsum
            </p>
            <div>
                <h1 className='text-white  font-serif font-bold 
            text-3xl text-center mt-8 mb-3'>Contact us</h1>
                <div className='flex flex-col lg:flex-row items-center w-3/6  mx-auto gap-16'>
                    <h1 className='text-white  font-semibold  text-sm my-5'>
                        Address: 14/5A Strada Statale 30,Caprile, Italy <br />
                        Support: chefs-choice@gmail.com <br />
                        Helpline: 0330 5319741,  0356 9979837, +390393 8673898 <br />
                    </h1>
                    <h1 className='flex justify-center items-center
                     text-white text-4xl gap-7'>
                        <FaGooglePlus></FaGooglePlus>
                        <FaFacebook></FaFacebook>
                        <FaLinkedin></FaLinkedin>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaYoutube></FaYoutube>
                    </h1>
                </div>
            </div>
            <Link to="/">
                <h1 className="text-white text-sm py-8 font-semibold text-center">
                    Copyright © 2023 Chef's Choice. All Rights Reserved.
                </h1>
            </Link>
        </div>
    );
};

export default Footer;