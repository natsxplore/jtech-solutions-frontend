function EnterpriseFeaturesSection({ enterpriseFeatures }) {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built with enterprise requirements in mind - security, scalability, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-dark-lighter border border-gray-800/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl shadow-lg">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EnterpriseFeaturesSection;
