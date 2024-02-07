import CreateUserButton from '../../Components/CreateUser';
import HomeButton from '../../Components/Buttons/HomeButton';

function Sandbox() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <CreateUserButton />
            <div className="flex flex-col items-center justify-center mb-8">
            </div>
            <HomeButton />
        </div>
    );
}

export default Sandbox;