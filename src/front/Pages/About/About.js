import Navbar from "../../Components/Navbar/Navbar";
import Avatar from "../../Components/Avatar/Avatar";
function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Navbar />
        <p className="text-4xl font-bold text-white">À propos</p>
        <p className="text-xl font-normal text-white text-center">
          Le projet DisGOvary est un projet fullstack mis en place afin qu'un développeur novice comprenne mieux les environnements de travail front et back.
          <br />
          Étant nous même des développeurs front et back, nous avons décidé de mettre en commun nos atouts afin de se répartir le travail équitablement. 
          <br /> <br />
          L’intérêt de l’application est très simple, il s’agit de gérer une
          base de données coté client (dans le navigateur) afin de mieux visualiser les données gérées par le serveur.
          <br /> <br />
          <span className="text-xl font-bold text-white">Les auteurs :</span>
        </p>
        <div className="flex flex-row items-center justify-center space-x-[12rem]">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default About;
