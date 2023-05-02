import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";

const AllChefs = ({ chef }) => {
    const { _id, chefName, chefPic, experience, recipesNumber, likes } = chef
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={chefPic} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-serif">{chefName}</h2>
                <div className='flex justify-between items-center my-5'>
                    <div className='font-semibold text-cyan-800'>
                        <li>Numbers of recipes: {recipesNumber}</li>
                        <li>Years of experience: {experience} years</li>
                    </div>
                    <div>
                        <p className='flex items-center font-bold gap-2'><FaThumbsUp></FaThumbsUp>{likes}</p>
                    </div>

                </div>
                <div className="card-actions justify-center">

                    <Link to={`chefs/${_id}`}>
                        <button className="btn btn-outline btn-info">View Recipes Button</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllChefs;