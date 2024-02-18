import React, { useState } from 'react';
import axios from 'axios';

const CreateComponent = () => {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/create.php', {
                nom: nom,
                description: description,
            });

            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de la création de l\'enregistrement', error);
        }
    };

    return (
        <div>
            <h2>Ajouter un élément</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom:
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default CreateComponent;
