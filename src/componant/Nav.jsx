import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/Tasks', name: 'Tasks' },
    ];

    return (
        <nav className="bg-teal-600 shadow-lg p-4 flex items-center justify-between text-lg md:text-xl transition-all duration-300">
            <div className="flex items-center">
                <img className="ml-5 h-12 w-12 rounded-full" src="https://placehold.co/50" alt="Logo" />
                <h1 className="text-white ml-4 font-bold tracking-wide">TaskMaster</h1>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden mr-4 p-2 text-white hover:text-yellow-300 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle navigation"
            >
                <FontAwesomeIcon icon={faBars} size="xl" />
            </button>

            {/* Nav Links */}
            <div className={`mr-5 flex gap-5 md:flex ${isOpen ? 'flex flex-col md:flex-row' : 'hidden md:flex'} items-center`}>
                {navLinks.map(link => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`text-white px-3 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-teal-500 hover:text-yellow-300 
                            ${location.pathname === link.path ? 'font-semibold text-yellow-300' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
