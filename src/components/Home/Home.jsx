import React from 'react'
import './Home.css';
import Header from '../Header/Header.jsx';
import Prayers from '../Prayers/Prayers.jsx';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <Prayers />
        </div>
    );
};

export default Home;