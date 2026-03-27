import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          {/* <Toaster position="top-center" reverseOrder={false} /> */}
          <Outlet></Outlet>
          <Footer></Footer> 
        </div>
    );
};

export default Root;