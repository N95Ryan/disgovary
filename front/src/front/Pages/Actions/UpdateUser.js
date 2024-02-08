import Navbar from "../../Components/Navbar/Navbar";
import ConstructionLoading from "../../Components/ConstructionLoading";
function UpdateUser() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="flex flex-col items-center justify-center space-y-8">
                <Navbar />
                <p className="text-4xl font-bold text-white">Update User</p>
                <ConstructionLoading />
            </div>
        </div>
    )
}

export default UpdateUser;