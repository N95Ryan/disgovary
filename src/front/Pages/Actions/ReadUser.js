import HomeButton from "../../Components/Buttons/HomeButton";
function ReadUser() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <HomeButton/>
            <p className="text-4xl font-bold text-white">Read User</p>
            <p className="text-xl font-normal text-white animate-pulse animate-infinite">Chargement en cours...</p>
        </div>
    )
}

export default ReadUser;