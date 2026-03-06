function FeaturesSection({ features }) {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Everything You Need
            <span className="text-primary"> to Run Your Business</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple, practical features designed for small businesses like yours.
            No complexity, just tools that work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                {/* <div className="absolute top-4 left-4 w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-2xl shadow-lg">
                  {feature.icon}
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{feature.description}</p>
                
                {/* Feature highlights */}
                <ul className="space-y-2">
                  {feature.highlights.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <span className="text-primary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    </section>
  );
}

export default FeaturesSection;