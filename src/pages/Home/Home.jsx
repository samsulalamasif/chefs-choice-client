import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AllChefs from '../AllChefs/AllChefs';
import DishesItems from '../DishesItems/DishesItems';
import CustomerReview from '../CustomerReview/CustomerReview';



const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("https://chefs-choice-server-side-samsulalamasif.vercel.app/chefs")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols lg:grid-cols-3 lg:p-20 gap-16 my-20'>
                {
                    chefs.map(chef => <AllChefs
                        key={chef._id} chef={chef}></AllChefs>
                    )
                }
            </div>
            <DishesItems></DishesItems>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;