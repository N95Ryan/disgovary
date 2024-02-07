import { Link } from 'react-router-dom';
import HomeButton from '../../Components/Buttons/HomeButton';

function Actions() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-white mb-4 animate-fade-right animate-once animate-normal">Bienvenue sur Dis<span className="text-teal-400 font-extrabold italic">GO</span>vary.</p>
            <p className="text-xl text-white animate-fade-left animate-once animate-normal">Que souhaitez-vous faire ?</p>
          </div>
          <div className='mt-4'>
            <Link to="/createuser" className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-2'>Créer un utilisateur</Link>
            <Link to="/readuser" className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2'>Voir la liste des utilisateurs</Link>
            <Link to="/updateuser" className='bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded m-2'>Rechercher un utilisateur</Link>
            <Link to="/deleteuser" className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded m-2'>Supprimer un utilisateur</Link>
          </div>
            </div>
            <HomeButton />
        </div>
    );
}

export default Actions;