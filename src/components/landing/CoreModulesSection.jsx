function CoreModulesSection({ coreModules }) {
  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Complete Business Solution</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three powerful modules working seamlessly together to power your entire business operation.
          </p>
        </div>

        <div className="space-y-24">
          {coreModules.map((module, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-[400px] object-cover rounded-2xl border border-gray-800/50 shadow-2xl"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{module.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{module.description}</p>
                <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary-light transition-all">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreModulesSection;
