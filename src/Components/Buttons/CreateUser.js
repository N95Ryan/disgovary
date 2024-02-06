import React, { useState } from 'react';

function CreateUserButton() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const createUser = async () => {
        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setSuccessMessage('Utilisateur créé avec succès !');
            setUsername(''); // réinitialise le champ du formulaire
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Créer un utilisateur</h2>
                {error && <p className="text-red-500">{error}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button onClick={createUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full">Créer mon utilisateur</button>
            </div>
        </div>    
    );
}

export default CreateUserButton;