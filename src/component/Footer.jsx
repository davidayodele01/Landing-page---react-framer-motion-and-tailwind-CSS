import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }
  return (
    <footer>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          {/* brand column */}
          <div className="flex flex-col gap-2 lg:col-span-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity "></div>
              <div className="w-4 h-4 bg-red-500 ml-2 rounded-full opacity-100 hover:opacity-75 "></div>
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-base font-medium ">The Next Design</span>
            </div>

            {/* Title paragraph */}
            <p className="text-gray-600 mb-6 w-3/4">
              The copy warned the little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>
            {/* logo-icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaFacebook className="size-5" />{" "}
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaTwitter className="size-5" />{" "}
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedin className="size-5" />{" "}
              </a>
            </div>
          </div>

        {/* Footer navigation */}
        <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <div key={categoryIndex}>
                    <h3 className="text-lg font-medium mb-4 uppercase"> {category}</h3>
                    <ul className="space-y-3">
                        {links.map((link, index)=>(
                            <li key={index}>
                                <a href="#" className="text-gray-600 hover:text-gray-900">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>
          
        </div>

        {/* footer bottom section */}
        <div className="mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-sm ">Copyright <span className="border-black">©️</span> {new Date().getFullYear()} <codetutorbd className="com"></codetutorbd> </p>
                <p className="text-600 text-sm">Created by kda_design</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
