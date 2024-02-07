import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed top-0 flex items-center flex-wrap bg-gradient-to-r from-teal-500 to-teal-300 p-6 w-full z-50">            
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="flex justify-around text-lg font-bold lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-white">
                        Accueil
                    </Link>
                    <Link to="/docs" className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-white">
                        Documentation
                    </Link>
                    <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-white">
                        À propos
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;