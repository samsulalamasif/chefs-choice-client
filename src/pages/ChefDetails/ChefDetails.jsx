import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const [chef, setChef] = useState([])
    const { _id, chefName, chefPic, experience, recipesNumber, likes } = chef

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://chefs-choice-server-side-samsulalamasif.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])

    console.log(id);
    return (
        <div>
            <h1>{chefName}</h1>
        </div>
    );
};

export default ChefDetails;