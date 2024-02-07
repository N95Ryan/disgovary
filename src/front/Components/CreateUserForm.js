import React, { useState } from 'react';

// Définition du composant CreateUserButton
function CreateUserForm() {
    // Initialisation des états pour le nom d'utilisateur, les erreurs et les messages de succès
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // Définition de la fonction createUser qui est une fonction asynchrone
    const createUser = async () => {
        try {
            // Tentative d'envoi d'une requête POST à l'API pour créer un nouvel utilisateur
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                })
            });
            // Si la réponse n'est pas OK (statut HTTP 200-299), une erreur est lancée
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Si la réponse est OK, le message de succès est défini et le champ du formulaire est réinitialisé
            setSuccessMessage('Utilisateur créé avec succès !');
            setUsername(''); // réinitialise le champ du formulaire
        } catch (error) {
            // Si une erreur se produit lors de la requête, l'erreur est capturée et définie dans l'état d'erreur
            setError(error.message);
        }
    };
    // Le composant renvoie une structure JSX pour l'affichage du composant CreateUserButton    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Veuillez rentrer votre nom ci-dessous</h2>
                {error && <p className="text-red-500 font-bold">{error}</p>}
                {successMessage && <p className="text-green-700 font-bold">{successMessage}</p>}
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" className="border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button onClick={createUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full">Créer</button>
            </div>
        </div>    
    );
}

export default CreateUserForm;