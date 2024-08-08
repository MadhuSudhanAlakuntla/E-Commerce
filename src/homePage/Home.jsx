import React from 'react';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <Footer/>
        </div>
    );
}

export default Home;
