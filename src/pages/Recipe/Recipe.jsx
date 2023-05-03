import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Recipe = ({ recipeOne }) => {
    const [disableBtn, setDisableBtn] = useState(true)

    const favoriteHandler = () => {
        toast("Favorite food add list items. Thank you!")
        setDisableBtn()
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className='h-96'><img src={recipeOne?.recipeImg} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif mx-auto text-3xl">{recipeOne?.recipeName}</h2>
                <h2 className="text-xl font-bold my-3">Ingredients: {recipeOne?.ingredients}</h2>
                <p><span className='font-bold'>Cooking Method:</span> {recipeOne?.cookingMethod}</p>
                <div className="flex justify-between  items-center">
                    <button disabled={!disableBtn} onClick={favoriteHandler} className="btn btn-outline btn-accent w-24">
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
    );
};

export default Recipe;