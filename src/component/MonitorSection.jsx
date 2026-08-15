import { FaArrowRight } from "react-icons/fa";


const MonitorSection = () => {
    return ( 
        <section className="max-w-7xl mx-auto px-16 py-16 md:py-24">
            <div className="flex items-center justify-center">
                {/* LHS */}
                <div>
                    <div className="text-green-500 font-semibold text-2xl">MONITOR</div>
                    <h2 className="text-gray-600 text-3xl mt-4 mb-6 md:text-4xl font-bold py-2 ">Introducing best mobile carousels</h2>
                    <p className="text-gray-600 pb-8">Before the ship is really back, Round, round, all around the world. Round, round, all around the world. Round, round, all around the world </p>
                    <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">Learn more about monitoring <FaArrowRight size-8/></a>
                </div>
                {/* RHS */}
                <div>
                    <img src="src/assets/monitor-card.webp" alt="imaghe" />
                </div>
            </div>
        </section>
     );
}
 
export default MonitorSection ;
