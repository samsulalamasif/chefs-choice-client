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
                <div className='font-semibold text-gray-800  my-5'>
                    <li>Numbers of recipes: {recipesNumber}</li>
                    <li>Years of experience: {experience} years</li>
                </div>
                <div className="flex justify-between">
                    <div>
                        <Link to={`chefs/${_id}`} className='flex-grow-1'>
                            <button className="btn btn-outline ">View Recipes</button></Link>
                    </div>
                    <div className='flex items-center text-2xl font-semibold gap-2'><FaThumbsUp></FaThumbsUp>{likes}</div>
                </div>
            </div>
        </div>
    );
};

export default AllChefs;