import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import {motion} from "framer-motion"
import {fadeIn} from "../utils/motion"



const SupportSection = () => {
    const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]
    return ( 
        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8" id="services">
            <div className="flex flex-col md:flex-row items-center justify-between gap-9 lg:gap-24 ">
                {/* LHS */}
                <motion.div 
                variants = {fadeIn("right", 0.3)}
                initial = "hidden"
                whileInView = "show"
                
                className="">
                    <div>
                        <h3 className="text-neutral-900 font-bold text-3xl md:text-4xl lg:text-4xl">Future of support with new shape</h3>
                    <p className="text-base w-full lg:w-[350PX] pt-6">Discuss your goal, determine success metrics, identify problems</p>
                    </div>

                    {/* bullet point */}
                    <div className="py-6 space-y-4">
                        <div className="flex items-center gap-2 ">
                            <div className="bg-purple-100 w-4 h-4 rounded-full flex items-center justify-center"><div className="bg-purple-400 w-2 h-2 rounded-full it"></div></div>
                            <p>UX design content strategy</p>
                        </div>
                        <div className="flex items-center gap-2 pb-6">
                            <div className="bg-purple-100 w-4 h-4 rounded-full flex items-center justify-center"><div className="bg-purple-400 w-2 h-2 rounded-full it"></div></div>
                            <p>Developement bring</p>
                        </div>

                        {/* button */}
                        <button className="bg-purple-600 hover:bg-purple-800 text-white py-3 px-5 rounded-full w-full md:w-[250px]">Get Started</button>
                        
                    </div>
                    
                </motion.div>

                {/* RHS */}
                <motion.div
                variants = {fadeIn("left", 0.4)}
                initial = "hidden"
                whileInView = "show"
                
                className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6"> 
                    {services.map((service, index)=>(
                        <div key={index} className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {service.description}
                            </p>
                            <a href={service.link} className="text-indigo-500 font-medium hover:text-indigo-700 transition-colors">Learn more</a>

                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
     );
}
 
export default SupportSection;