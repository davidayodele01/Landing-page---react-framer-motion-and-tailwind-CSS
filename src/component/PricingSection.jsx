import {useState} from 'react'
import {motion} from "framer-motion"
import {fadeIn} from "../utils/motion"


const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // calculate product price based on product count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <motion.section 
    variants = {fadeIn("right", 0.2)}
    initial = "hidden"
    whileInView = "show"

    
    className="py-10 mx-auto">
      <div className='px-4 lg:px-8'>
        {/* first */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Pricing
          </h2>
        </div>

        {/* second */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* starter plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">${starterPrice}/mon</p>
          </div>

          {/* Business plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">${businessPrice}/mon</p>
          </div>
        </div>

        {/* third */}
        <div>
            <p className="text-center text-gray-600 mb-4">{productCount} products</p>
        </div>

        <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-600">1</span>
                <input className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" type="range" min="1" max="50" value={productCount} onChange={(e)=>setProductCount (parseInt(e.target.value))} />
                <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
        </div>
        {/* button */}
        <div className='text-center mt-12'>
            <p className='text-xl text-gray-600 mb-4'>Ready to get started</p>
            <button className='bg-blue-500 text-white w-full md:w-[250px] lg:w-[250px] px-6 py-3 rounded-lg hover:bg-blue-700  transition-colors cursor-pointer'>Get Started</button>
        </div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
