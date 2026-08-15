const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 item-center justify-center">
      {/* Headline Text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          How can we help your business
        </h2>
        <p className="text-gray-600">
          When you resell beniks, you build your trust and increase{" "}
        </p>
      </div>
      {/* Content for features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center  p-6">
            {/* icon */}
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FF37E7",
              }}
            >
              {feature.icon}
            </div>

            {/* title & description */}
            <div className="items-center justify-center">
              <h3 className="text-xl font-bold mb-2  text-center">{feature.title} </h3>
              <p className="text-gray-600 text-center">{feature.description} </p>
            </div>

            
          </div>
        ))}
        
      </div>
      {/* button */}
            <div className="button text-center items-center justify-center w-full mt-12">
              <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font=medium hover:bg-blue-700 transition-colors relative justify-center items-center">
                Become a partner
                <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></div>
              </button>
            </div>
    </section>
  );
};

// Time duration: 1:40:00 - 2:00:00

export default FeaturesSection;
