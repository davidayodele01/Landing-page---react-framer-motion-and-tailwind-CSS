import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import {textVariant} from "../utils/motion"
import heroImage from "../assets/hero-image.png"


const Hero = () => {
  
  return (
    <div
      id="home"
      className="container sm:w-full mx-auto flex flex-col md:flex-row justify-between items-center pt-32 pb-6 px-4 lg:px-8"
    >
      {/* LHS */}
      <div className="w-full md:w-[58%] space-y-8">
        {/* starbadge */}
        {/* To use framer.motion[first install the framer.motion then import it to the page, then start to call(or import) the motion type to the page] */}
        <motion.div
          variants={fadeIn ("right",0.3)}
          initial="hidden"
          whileInView="show"
          
          className="flex items-center gap-2 bg-slate-50/20 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group"
        >
          <span className="text-blue-600  group-hover:text-yellow-600 group-hover:scale-110 transition-transform">
            ⭐
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        
        
        className="text-[24px] md:text-5xl lg:text-[56px] font-bold leading-[150%]">
          We boost the growth for{" "}
          <span className="text-blue-600 relative inline-block">
            Startup to fortune 500{" "}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{" "}
          Companies <span className="inline-block ml-2 animate-pulse">⏰</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        
        className="text-xl text-[#212121] font-medium ">
          Get the most accurate leads, sales people training and conversions,
          tools and more - all within the same one billings
        </motion.p>

        {/* Email input */}
        <div className="flex gap-3 max-w-md pt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-green-600 text-white px-8 py-6 rounded-xl hover:bg-green-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-green-300">
            →
          </button>
        </div>
      </div>

      {/* RHS */}
      <motion.div 
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      
      
      className="w-full md:w-[42%] pt-6 ">
        <div>
          {/* <img
            src="src/assets/hero-image.png"
            alt="Hero-image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          /> */}

          <img src={heroImage} alt="Hero-image" />

        
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
