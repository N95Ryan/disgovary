import Navbar from '../../Components/Navbar/Navbar';
import CreateUserForm from '../../Components/Forms/CreateUserForm';

function Sandbox() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <Navbar />
            <CreateUserForm />
            {/* <div className="flex flex-col items-center justify-center">
                <Link to="/createuser" className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-2'>Créer un utilisateur</Link>
                <Link to="/src/front/Pages/Actions/CreateUser.js" className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-2'>Voir la liste des utilisateurs</Link>
                <Link to="/src/front/Pages/Actions/CreateUser.js" className='bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded m-2'>Rechercher un utilisateur</Link>
                <Link to="/src/front/Pages/Actions/CreateUser.js" className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded m-2'>Supprimer un utilisateur</Link>
            </div> */}
        </div>
    );
}

export default Sandbox;