import HomeButton from '../../Components/Buttons/HomeButton';

function ActionsDB() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="flex flex-col items-center justify-center mb-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Bouton 1</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">Bouton 2</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2">Bouton 3</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">Bouton 4</button>
            </div>
            <HomeButton />
        </div>
    );
}

export default ActionsDB;