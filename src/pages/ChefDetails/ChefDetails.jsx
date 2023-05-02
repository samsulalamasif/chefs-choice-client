import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BgImg from "../../assets/bg1.jpg"
import { FaThumbsUp } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { toast } from 'react-toastify';
import Recipe from '../Recipe/Recipe';


const ChefDetails = () => {
    const [disableBtn, setDisableBtn] = useState(true)

    const favoriteHandler = () => {
        toast("Favorite food add list items. Thank you!")
        setDisableBtn()
    }

    const [chef, setChef] = useState([])
    const { _id, chefName, chefPic, experience, recipesNumber, likes, description, recipeOne, recipeTwo, recipeThree } = chef

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
                            <img src={chefPic} className="w-48 h-48 rounded-full mx-auto" />
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






{/* <div style={{
    backgroundImage: `url(${BgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100vh"
}}>

    <div>
        <h1>{chefName}</h1>
    </div>
</div> */}