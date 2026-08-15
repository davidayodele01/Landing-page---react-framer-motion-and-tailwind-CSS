import { VscNewSession } from "react-icons/vsc";
import Company_Logo from "./component/Company_Logo";
import FeaturesSection from "./component/FeaturesSection";
import Hero from "./component/Hero";
import MonitorSection from "./component/MonitorSection";
import NavBar from "./Component/Navbar";
import PricingSection from "./component/PricingSection";
import PurposeSection from "./component/PurposeSection";
import ScheduleSection from "./component/ScheduleSection";
import SupportSection from "./component/SupportSection";
import TestimonialSection from "./component/TestimonialSection";
import NewsLetterSection from "./component/NewsLetterSection";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/60 to-pink-500/20 rounded-full blur-[80px] -z-10 "></div>
        <div className="overflow-hidden">
          <NavBar />
          <Hero />
          <Company_Logo/>
          <PurposeSection/> 
          <FeaturesSection/>
          <ScheduleSection/>
          <MonitorSection/>
          <PricingSection/>
          <SupportSection/>
          <TestimonialSection/>
          <NewsLetterSection/>
          <Footer/>
          
          

        </div>
      </main>
    </>
  );
}

export default App;
