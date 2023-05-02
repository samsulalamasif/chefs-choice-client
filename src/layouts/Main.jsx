import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className='lg:min-h-[calc(100vh-100px)]'>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;