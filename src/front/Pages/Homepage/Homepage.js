import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <Navbar />
        <div className="flex flex-col items-center justify-center mb-8">
          <a href="https://go.dev/" target="_blank" rel="noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/1200px-Go_Logo_Aqua.svg.png"
              alt="Go Logo"
              className="w-64 md:w-96 h-auto mb-4 animate-shake animate-infinite animate-duration-[4985ms]"
            />
          </a>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-4xl font-bold text-white mb-4 animate-fade-right animate-once animate-normal">Bienvenue sur Dis<span className="text-teal-400 font-extrabold italic">GO</span>vary.</p>
            <p className="text-sm md:text-xl text-white animate-fade-left animate-once animate-normal">Veuillez cliquer sur le bouton ci-dessous afin de démarrer.</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 md:space-x-6">
            <a href="/actions" className="bg-teal-600 hover:bg-teal-800 text-white text-xl md:text-2xl font-bold py-2 md:py-4 px-2 md:px-4 rounded-3xl mt-8 shadow-xl animate-jump animate-once animate-normal">
              C.R.U.D
            </a>
          </div>
        </div>      </div>
  );
}

export default Homepage;