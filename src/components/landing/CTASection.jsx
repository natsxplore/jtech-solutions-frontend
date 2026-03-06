function CTASection({ onSignupClick }) {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-light via-black to-dark-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to grow your business?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Let us help you manage your sales, inventory, and customer tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onSignupClick}
            className="px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-light transition-all shadow-xl shadow-primary/30 text-lg"
          >
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-primary hover:text-primary transition-all text-lg">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
