import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            Smart India Hackathon
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400">
              Home
            </Link>

            <Link to="/about" className="text-white hover:text-cyan-400">
              About
            </Link>

            <Link to="/features" className="text-white hover:text-cyan-400">
              Features
            </Link>

            <Link to="/team" className="text-white hover:text-cyan-400">
              Team
            </Link>

            <Link to="/contact" className="text-white hover:text-cyan-400">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 pb-4">
            <nav className="flex flex-col space-y-3 px-4">
              <Link to="/" className="text-white">Home</Link>
              <Link to="/about" className="text-white">About</Link>
              <Link to="/features" className="text-white">Features</Link>
              <Link to="/team" className="text-white">Team</Link>
              <Link to="/contact" className="text-white">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;