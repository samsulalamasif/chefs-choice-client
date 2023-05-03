import React from 'react';
import img from "../../assets/chef.png"

const Navbar = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-evenly pt-10 px-24  bg-stone-200 '>
            <div className=' pt-28'>
                <h1 className='text-7xl font-serif text-gray-700 font-bold  mb-8'>
                    Italian Food</h1>
                <h1 className='text-4xl font-serif text-gray-700 font-semibold '>
                    Your favorite</h1>
                <h1 className='text-4xl font-serif text-gray-700 font-semibold '>
                    food gets even</h1>
                <h1 className='text-4xl font-serif  text-gray-700 font-semibold '>better</h1>
                <p className='text-xl font-sans text-gray-700 my-5'>
                    Amet consectetur adipisicing elit. Aperiam dolorem <br />
                    minima beatae, molestiae quaerat animi ea nulla ad, omnis vitae <br />
                    nulla ad, omnis vitae magnam ab commodi recusandae <br />
                    corporis voluptatum autem voluptates. <br />
                    sapiente officia autem voluptates.
                </p>
                <button className="btn btn-outline  mt-8">
                    Get Started
                </button>
            </div>
            <div className="w-56 lg:w-[350px]">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
