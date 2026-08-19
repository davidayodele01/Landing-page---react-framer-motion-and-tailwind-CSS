import { motion } from "framer-motion";
import{fadeIn} from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];
  return (
    <section  id="about" className="w-full bg-blue-100 py-10 ">
      <motion.div
      variants = {fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      
      
      className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3">
          {/* RHS */}
          <div className="">
            <p className="text-sm text-purple-600 font-medium mb-2">
              ACHIEVE MORE{" "}
            </p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-3 font-bold text-gray-900 ">
              Purpose of a convoy is to keep your team
            </h2>
          </div>

          {/* bullet point */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8 pt-6"> 
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-start rounded-lg">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                
            
              </div>
            ))}
          
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PurposeSection;
