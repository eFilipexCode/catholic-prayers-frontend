import React, { useState, useEffect } from 'react';
import './Prayers.css';
import Pray from '../Pray/Pray.jsx';
import api from '../../services/api.js';

function Prayers() {
    const [pray, setPray] = useState([]);
    const [page, setPage] = useState(1);


    async function getPray() {
        const response = await api.get(`/prayers?page=${page}`);
        setPray([...pray, ...response.data]);
        setPage(page + 1);
        console.log(response.data, page);
    };

    useEffect(() => {
        getPray();
    }, []);

    return (
        <div className="prayers-container">
            {pray.map(p => (
                <Pray title={p.title} content={p.content} creator={p.creator} key={p._id} />
            ))}
            <button className="load-more" onClick={getPray}>Carregar Mais</button>
        </div>
    );
};

export default Prayers;