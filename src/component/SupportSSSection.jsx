
import {motion} from "framer-motion"
import {fadeIn} from "../utils/motion"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import office from "../assets/office.png"



const services = [
  {
    id: "couples",
    title: "Couple Counselling",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque eveniet perferendis. Vitae dolore modi at exercitationem fugiat aspernatur officia",
    benefits: [
      "Understanding relationship dynamics",
      "Improving communication channels",
      "Resolving ongoing conflicts",
    ],
  },
  {
    id: "parenting",
    title: "Parent Skills",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque eveniet perferendis. Vitae dolore modi at exercitationem fugiat aspernatur officia",
    benefits: [
      "Effective behavioral management",
      "Building emotional resilience",
      "Strengthening parent-child bonds",
    ],
  },
  {
    id: "stuck",
    title: "Feeling Stuck",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque eveniet perferendis. Vitae dolore modi at exercitationem fugiat aspernatur officia",
    benefits: [
      "Identifying core bottlenecks",
      "Designing clear action steps",
      "Restoring daily momentum",
    ],
  },
  {
    id: "confidence",
    title: "Confidence Building",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque eveniet perferendis. Vitae dolore modi at exercitationem fugiat aspernatur officia",
    benefits: [
      "Overcoming self-doubt",
      "Assertive communication tools",
      "Establishing healthy boundaries",
    ],
  },
];

const SupportSSSection = () => {
  return (
    <section className="w-full justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="pt-12 sm:pt-16 md:pt-28 container mx-auto text-center">
        {/* Header Section */}
        <div
        
        
        className="pt-4 max-w-2xl mx-auto">
          <motion.h1 
          variants = {fadeIn("right", 0.3)}
        initial = "hidden"
        whileInView = "show"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            What can we do together
          </motion.h1>
          <motion.p 
          variants = {fadeIn("left", 0.2)}
        initial = "hidden"
        whileInView = "show"
          
          className="pt-3 text-base sm:text-lg text-gray-600">
            We can work together to achieve great things and make a positive
            impact in our community.
          </motion.p>
        </div>

        {/* Dynamic Tabs */}
        <motion.div 
        variants = {fadeIn("down", 0.5)}
        initial = "hidden"
        whileInView = "show"
        
        className="pt-6 md:pt-10">
          <Tabs>
            <TabList className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 pt-4 px-2 sm:px-6 md:px-12 border-b-0">
              {services.map((service, index) => (
                <Tab
                  key={index}
                  className="cursor-pointer px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all focus:outline-none"
                >
                  {service.title}
                </Tab>
              ))}
            </TabList>

            {/* Tab Panels */}
            {services.map((service, index) => (
              <TabPanel key={index} className="pt-6 w-full text-left">
                <div className="bg-green-400 rounded-2xl p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
                    {/* Content Box */}
                    <div className="w-full md:w-1/2 bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-700 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 mb-6 font-normal">
                        {service.description}
                      </p>
                      <h4 className="text-lg sm:text-xl font-medium text-neutral-800 mb-2">
                        Benefits
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 font-normal">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Box */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <img
                        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
                        src={office}
                        alt={`${service.title} illustration`}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSSSection;