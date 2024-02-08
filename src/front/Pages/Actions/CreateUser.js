import CreateUserForm from '../../Components/Forms/CreateUserForm';
import Navbar from '../../Components/Navbar/Navbar';
function CreateUser() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <Navbar/>
            <CreateUserForm />
            <div className="flex flex-col items-center justify-center mb-8">
            </div>
        </div>
    );
}

export default CreateUser;