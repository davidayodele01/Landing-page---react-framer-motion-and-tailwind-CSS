import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion"
import {fadeIn} from "../utils/motion"


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    const navLinks = [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#testimonial", label: "Testimonial" },
    ];
  return ( 
  <motion.nav 
  variants={fadeIn("down",0.2)}
  initial="hidden"
  whileInView="show"
  viewPort={{once:true}}

  
  className="flex fixed top-0 left-0 right-0 bg-green-300 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm items-center">

    {/* NavBar container */}
    <div className="container flex w-full mx-auto items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">

      {/* Logo */}
      <div className="flex items-center gap-1 cursor-pointer" >
        <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity "></div>
        <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 "></div>
      </div>


      {/* mobile menu button for navigation */}
      
        <button className="md:hidden " onClick={() => setIsMenuOpen(!isMenuOpen)}>
          
          { 
            isMenuOpen ? <FiX className="size-6"/> : <BiMenu className="size-6"/>
          }
        </button>
        
      

      {/* desktopNavBar Navigation */}
      <div className="hidden md:flex items-center gap-20">
          {navLinks.map((link, index) => (
            <a
              onClick={()=> setActiveLink(link.href)}
              key={index}
              href={link.href}
              className={`text-sm font-medium relative after:bottom-0 after:left-0 after:h-0.5 after:overflow-hidden after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-700 hover:text-gray-900"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

      {/* Get in touch button */}
      <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
        <a href="#newsletter">Get in touch</a>
      </button>

      {/* mobile menu navigation item  */}
      {
        isMenuOpen && (
          <div className="md:hidden absolute w-full  bg-blue-300 px-5 border-gray-100 py-4">
            <div className="container mx-auto top-0 right-0 px-6 space-y-3">
              {
                navLinks.map((link, index) => (
                  <a
                    key={index}
                    onClick={()=>{
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }} 
                  className={`block text-sm font-medium  py-2 ${activeLink === link.href ? "text-blue-500": "text-gray-600 hover:text-blue-400"}`} href={link.href}>{link.label}</a>
                ))
              }
            </div>
            <button className=" bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
        <a href="#newsletter">Get in touch</a>
      </button>
          </div>
        )
      }

      

    </div>
  </motion.nav> );
}
 
export default NavBar;