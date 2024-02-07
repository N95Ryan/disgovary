import { Link } from 'react-router-dom';
import CreateUserButton from '../../Components/Buttons/CreateUser';

function ActionsDB() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="flex flex-col items-center justify-center mb-8">
                <CreateUserButton />
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">Bouton 2</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2">Bouton 3</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">Bouton 4</button>
                <Link to="/" className="bg-teal-600 hover:bg-teal-800 text-white text-2xl font-normal py-4 px-4 rounded-3xl mt-8">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}

export default ActionsDB;