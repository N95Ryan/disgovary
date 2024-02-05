import "./Homepage.css";

function Homepage() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="flex flex-col items-center justify-center mb-8">
          <a href="https://go.dev/" target="_blank" rel="noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/1200px-Go_Logo_Aqua.svg.png"
              alt="Go Logo"
              className="w-64 h-auto mb-4"
            />
          </a>
          <p className="text-4xl font-bold text-white mb-4">Bienvenue sur DisGOvary.</p>
          <p className="text-xl text-white">Veuillez cliquer sur le bouton ci-dessous pour accéder à l'application.</p>
          <a href="/actionsdb" className="bg-teal-600 hover:bg-teal-800 text-white text-2xl font-semibold py-4 px-4 rounded-3xl mt-8">
            Accéder aux actions
          </a>
        </div>
      </div>
  );
}

export default Homepage;