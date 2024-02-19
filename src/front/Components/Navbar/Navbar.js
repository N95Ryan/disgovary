import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { IoIosMenu } from "react-icons/io";
Modal.setAppElement('#root'); // This line is needed for accessibility reasons

function Navbar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 flex items-center flex-wrap bg-transparent lg:bg-gradient-to-r from-teal-500 to-teal-300 p-6 w-full z-50">
            <IoIosMenu className='w-10 h-auto text-white lg:hidden block'
                onClick={() => setModalIsOpen(!modalIsOpen)}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Menu"
                className="fixed inset-0 flex items-center justify-center outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-25"
            >
                <div className="bg-white  w-[250px] h-[250px] text-2xl rounded-xl flex flex-col items-center justify-center p-5 overflow-auto mx-auto">
                    <Link to="/" className="text-teal-800 hover:text-white mb-4">
                        Accueil
                    </Link>
                    <Link to="https://github.com/N95Ryan/disgovary#stack-%EF%B8%8F" className="text-teal-800 hover:text-white mb-4">
                        Documentation
                    </Link>
                    <Link to="/about" className="text-teal-800 hover:text-white">
                        À propos
                    </Link>
                </div>           
            </Modal>            
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:block hidden">
                <div className="flex justify-around text-lg font-bold lg:flex-grow">
                    <Link to="/" className="block lg:inline-block lg:mt-0 text-teal-800 hover:text-white transition duration-10000 ease-in-out">
                        Accueil
                    </Link>
                    <Link to="https://github.com/N95Ryan/disgovary#stack-%EF%B8%8F" className="block lg:inline-block lg:mt-0 text-teal-800 hover:text-white">
                        Documentation
                    </Link>
                    <Link to="/about" className="block lg:inline-block lg:mt-0 text-teal-800 hover:text-white">
                        À propos
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;