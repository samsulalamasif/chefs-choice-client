import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BgImg from "../../assets/bgImg1.jpg"
import { FaThumbsUp } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';
import LazyLoad from 'react-lazy-load';
import "./ChefDetails.css"


const ChefDetails = () => {

    const [chef, setChef] = useState([])
    const { chefName, chefPic, experience, recipesNumber, likes, description, recipeOne, recipeTwo, recipeThree } = chef

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://chefs-choice-server-side-samsulalamasif.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])

    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${BgImg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <LazyLoad >
                                <img src={chefPic} className="w-44 h-44 mt-10  rounded-full mx-auto" />
                            </LazyLoad>
                            <h1 className="mb-5 text-7xl font-bold my-5">{chefName}</h1>
                            <p className="mb-5">{description}</p>
                            <div className='text-cyan-300 text-xl font-bold '>
                                <p>Numbers of recipes: {recipesNumber}</p>
                                <p>Years of experience: {experience} years</p>
                            </div>
                            <p className='flex justify-center items-center my-5 text-3xl gap-2'>
                                <FaThumbsUp></FaThumbsUp>{likes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 p-24'>
                <Recipe recipeOne={recipeOne}></Recipe>
                <Recipe recipeOne={recipeTwo}></Recipe>
                <Recipe recipeOne={recipeThree}></Recipe>
            </div>


        </div>
    );
};
export default ChefDetails;



