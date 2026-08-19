import {motion} from "framer-motion"
import {textVariant, fadeIn} from "../utils/motion"



import { FaArrowRight } from "react-icons/fa";

const MonitorSection = () => {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col md:flex-row lg:flex-row gap-8 items-center justify-center md:py-10 px-4 py-10md:px-8  lg:px-8 mx-auto">
        {/* LHS  */}
        <div>
          <motion.div 
          variants = {textVariant(0.2)}
          initial = "hidden"
          whileInView = "show"
          
          
          className="text-green-500 font-semibold text-2xl">
            MONITOR
          </motion.div>
          <motion.h2 
           variants = {textVariant(0.3)}
          initial = "hidden"
          whileInView = "show"
          className="text-gray-600 text-3xl mt-4 mb-6 md:text-4xl font-bold py-2 ">
            Introducing best mobile carousels
          </motion.h2>
          <p className="text-gray-600 pb-8">
            Before the ship is really back, Round, round, all around the world.
            Round, round, all around the world. Round, round, all around the
            world{" "}
          </p>
          <motion.a
          variants = {fadeIn("right", 0.3)}
          initial = "hidden"
          whileInView = "show"
            href="#"
            className="text-blue-500 font-medium flex items-center justify-start gap-2 hover:gap-4 transition-all "
          >
            Learn more about monitoring <FaArrowRight size-8 className="pt-1" />
          </motion.a>
        </div>
        {/* RHS */}
        <motion.div
        variants = {fadeIn("left", 0.2)}
        initial = "hidden"
        whileInView="show"
        
        >
          <img src="src/assets/monitor-card.webp" alt="image" />
        </motion.div>
      </div>
    </section>
  );
};

export default MonitorSection;
