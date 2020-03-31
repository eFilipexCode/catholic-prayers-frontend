import React from 'react';
import './Pray.css';

function Pray(props) {
    return (
        <div className="pray-container">
            <h1 className="title">{props.title}</h1>
            <p className="content">{props.content}</p>
            <div className="credits-prayer">
                <span>Oração criada por: <span className="creator">{props.creator}</span></span>
            </div>
        </div>
    );
};

export default Pray;