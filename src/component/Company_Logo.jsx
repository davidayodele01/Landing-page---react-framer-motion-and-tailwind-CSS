// import React from "react";
import meundies from "../assets/meundies.png";
import slack from "../assets/slack.png";
import woocommerce from "../assets/woocommerce.png";
import sitepoint from "../assets/sitepoint.png";


const Company_Logo = () => {
const logos = [meundies, slack, woocommerce, sitepoint];
      return (
    <div className="logo-carousel-container w-full overflow-hidden gap-8 container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start">
      {/* logo title */}
      <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </div>
      {/* logos */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="company logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          
        ))}
        {/* Duplicate logos for seamless scrolling */}
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="company logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          
        ))}
      </div>
      
    </div>
    

    

  );
};

// Youtube time duration 1:18:00 - 1:31:00

export default Company_Logo;
