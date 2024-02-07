import CreateUserForm from '../../Components/Forms/CreateUserForm';
import HomeButton from '../../Components/Buttons/HomeButton';

function CreateUser() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <HomeButton/>
            <CreateUserForm />
            <div className="flex flex-col items-center justify-center mb-8">
            </div>
            <HomeButton />
        </div>
    );
}

export default CreateUser;