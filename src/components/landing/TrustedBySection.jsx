function TrustedBySection({ integrations }) {
  return (
    <section className="py-12 bg-dark-light border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {integrations.map((company, index) => (
              <div key={index} className="text-gray-500 font-semibold text-lg">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
