import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function HomeButton() {
    return (
        <Link to="/" alt="Accueil" className="fixed top-0 left-0 flex items-center justify-center bg-teal-600 hover:bg-teal-800 text-white text-2xl font-normal rounded-3xl p-3 m-3">
              <FaHome className="w-8 h-8" />
        </Link>
    );
}

export default HomeButton;