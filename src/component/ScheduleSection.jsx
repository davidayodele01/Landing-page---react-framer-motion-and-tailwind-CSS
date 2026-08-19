import { FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion"
import {fadeIn} from "../utils/motion"



const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 px-4 py-16 md:py-24 lg:px-8">
        {/* LHS */}
        <motion.div
        
        variants = {fadeIn("left", 0.3)}
        initial = "hidden"
        whileInView = "show"
        >

            <img src="src/assets/monitor-card.webp" alt="monitor-image" />
        </motion.div>
        {/* RHS */}
        <motion.div 
        variants = {fadeIn("right", 0.3)}
        initial = "hidden"
        whileInView = "show"
        
        
        className="md:w-1/2 w-full">
            <p className="text-orange-500 font-semibold">SCHEDULE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">Streamline your  business <br/>
            with Smart Scheduling Solutions
            </h2>
            <p className="text-gray-600 mb-8">Take control of your time and boost productivity with our intelligent schedulling system. Automate appointments, manage team availability, and deliver exceptional customer experience through seamless calender management.</p>
            <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">Explore scheduling features <FaArrowRight className="size-8" /> </a>

        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
