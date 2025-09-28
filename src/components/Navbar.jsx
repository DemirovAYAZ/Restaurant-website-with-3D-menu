import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-orange-400">Resto</span>Hub
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#menu" className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                Menu
              </a>
              <a href="#gallery" className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </a>
              <a href="#about" className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-full font-semibold transition-colors">
              Reserve Table
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-400 focus:outline-none focus:text-orange-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 rounded-lg mt-2">
              <a href="#home" className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#menu" className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium">
                Menu
              </a>
              <a href="#gallery" className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium">
                Gallery
              </a>
              <a href="#about" className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-white hover:text-orange-400 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-full font-semibold transition-colors w-full mt-4">
                Reserve Table
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
