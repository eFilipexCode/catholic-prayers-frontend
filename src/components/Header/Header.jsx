import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import hands from '../../assets/praying.png';

function Header() {
    return (
        <div className="header-container">
            <div className="site-name">
                <h1>Catholic Prayers</h1>
                <img src={hands} alt="Catholic Prayers"/>
            </div>
            <Link to="/pray">Rezar</Link>
        </div>
    );
};

export default Header;