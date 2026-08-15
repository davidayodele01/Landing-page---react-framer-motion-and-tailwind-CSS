import { useState } from "react";
// import { useState } from "react";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "about", label: "About" },
    { href: "services", label: "Services" },
    { href: "testimonial", label: "Testimonial" },
  ];

  return (
    <nav className=" flex fixed top-0 left-0 right-0 bg-green-300 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm items-center ">
       
      <div className="flex flex-col w-full container mx-auto items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
         {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75"></div>
        </div>
        QWERTYUI

        {/* Desktop NavBar */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm font-medium relative after:bottom-0 after:left-0 after:h-0.5 after: w-0 hover:w-full after:bg-blue-600 after:transition-all `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};



export default NavBar;
