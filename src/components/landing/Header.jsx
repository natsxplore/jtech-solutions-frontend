function Header({ onLoginClick, onSignupClick }) {
  return (
    <header className="bg-black/95 backdrop-blur-lg border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">J</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">JTECH SOLUTIONS</h1>
              <p className="text-xs text-gray-400">Business Made Easy</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-10">
            <a href="#features" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">FEATURES</a>
            <a href="#solutions" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">SOLUTIONS</a>
            <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">PRICING</a>
            <a href="#reviews" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">TESTIMONIALS</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="px-5 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              LOGIN
            </button>
            <button
              onClick={onSignupClick}
              className="px-6 py-2.5 bg-primary text-black font-semibold hover:bg-primary-light transition-all rounded-lg text-sm shadow-lg shadow-primary/20"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
