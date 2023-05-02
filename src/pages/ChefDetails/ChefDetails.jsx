import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BgImg from "../../assets/bg1.jpg"
import { FaThumbsUp } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const [chef, setChef] = useState([])
    const { _id, chefName, chefPic, experience, recipesNumber, likes, description, recipeOne, recipeTwo, recipeThree } = chef

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://chefs-choice-server-side-samsulalamasif.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])

    console.log(id);
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
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-96'><img src={recipeOne?.recipeImg} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-serif mx-auto text-3xl">{recipeOne?.recipeName}</h2>
                        <h2 className="text-xl font-bold my-3">Ingredients: {recipeOne?.ingredients}</h2>
                        <p>Cooking Method: {recipeOne?.cookingMethod}</p>
                        <div className="flex justify-between  items-center">
                            <button onClick={() => toast("Favorite Food add list items. Thank you!")} toast className="btn btn-outline btn-accent w-24">
                                Favorite</button>
                            <div className='flex items-center'>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={Math.round(recipeOne?.rating || 0)} readOnly />
                                <span className='ms-2'> {recipeOne?.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-96'><img src={recipeTwo?.recipeImg} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-serif mx-auto text-3xl">{recipeTwo?.recipeName}</h2>
                        <h2 className="text-xl font-bold my-3">Ingredients: {recipeTwo?.ingredients}</h2>
                        <p>Cooking Method: {recipeTwo?.cookingMethod}</p>
                        <div className="flex justify-between  items-center">
                            <button onClick={() => toast("Favorite Food add list items. Thank you!")} toast className="btn btn-outline btn-accent w-24">
                                Favorite</button>
                            <div className='flex items-center'>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={Math.round(recipeTwo?.rating || 0)} readOnly />
                                <span className='ms-2'> {recipeTwo?.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='h-96'><img src={recipeThree?.recipeImg} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-serif mx-auto text-3xl">{recipeThree?.recipeName}</h2>
                        <h2 className="text-xl font-bold my-3">Ingredients: {recipeThree?.ingredients}</h2>
                        <p>Cooking Method: {recipeThree?.cookingMethod}</p>
                        <div className="flex justify-between  items-center">
                            <button onClick={() => toast("Favorite Food add list items. Thank you!")} toast className="btn btn-outline btn-accent w-24">
                                Favorite</button>
                            <div className='flex items-center'>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={Math.round(recipeThree?.rating || 0)} readOnly />
                                <span className='ms-2'> {recipeThree?.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
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