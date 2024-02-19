import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

function Actions() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <Navbar />
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white animate-fade-down animate-once animate-duration-[600ms] animate-delay-0 animate-ease-in">Que souhaitez-vous faire ?</p>
          <p className="text-xl text-white animate-fade-left animate-once animate-normal"></p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 animate-fade-up animate-once animate-duration-[600ms] animate-delay-0 animate-ease-in">
          <Link to="/createuser" className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-2 '>Créer un utilisateur</Link>
          <Link to="/readuser" className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2'>Voir la liste des utilisateurs</Link>
          <Link to="/updateuser" className='bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded m-2'>Rechercher un utilisateur</Link>
          <Link to="/deleteuser" className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded m-2'>Supprimer un utilisateur</Link>
        </div>
      </div>
    </div>
  );
}

export default Actions;