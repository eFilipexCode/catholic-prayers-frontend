import React, { useState } from 'react';
import api from '../../services/api.js';
import { Link, useHistory } from 'react-router-dom';
import './NewPray.css';

function NewPray() {
    const [title, setTitle] = useState("");
    const [pray, setPray] = useState("");
    const [creator, setCreator] = useState("");

    const history = useHistory();

    async function postPray(e) {

        e.preventDefault();

        if (!title || !pray || !creator)
            return alert("Preencha completamente os campos do formulário!");

        const data = {
            title,
            content: pray,
            creator
        };

        try {
            await api.post('/prayer', data);
            alert("Oração registrada com sucesso. Não se esqueça de rezar pelo projeto. Obrigado!");
            history.push("/");
        } catch (err) {
            alert("Ocorreu algum erro. Tente novamente!");
        }
    };

    return (
        <div className="post-pray">
            <Link to="/">Voltar</Link>
            <form onSubmit={postPray} className="pray-form">
                <input 
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    placeholder="Título" />
                <textarea 
                    onChange={e => setPray(e.target.value)} 
                    value={pray}
                    placeholder="Oração" />
                <input
                    onChange={e => setCreator(e.target.value)} 
                    value={creator}
                    placeholder="Criador" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default NewPray;