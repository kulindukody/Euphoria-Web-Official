// components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyApp</Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links container */}
        <ul
          className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        >
          <li>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-700 rounded">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
