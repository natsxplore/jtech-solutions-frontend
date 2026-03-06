function HeroSection({ metrics, onSignupClick }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-dark-light to-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop)'
          }}
        ></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-dark-lighter/50 backdrop-blur-sm border border-gray-800/50 rounded-full px-4 py-2 mb-8">
              <span className="text-primary text-sm">🚀</span>
              <span className="text-gray-300 text-sm font-medium">Early Access - Join 50+ growing businesses</span>
            </div>

            {/* Main Headline - Professional enterprise headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Simple Tools for
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Your Growing Business
              </span>
            </h1>
            
            {/* Description - Professional value proposition */}
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed font-light">
              Track sales, manage inventory, and know your customers — all in one easy-to-use platform.
            </p>
            <p className="text-base text-gray-400 mb-10">
              Built for small businesses that want to grow without the complexity.
            </p>

            {/* CTA Buttons - Professional call-to-action */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:justify-start justify-center">
              <button
                onClick={onSignupClick}
                className="px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-light transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 text-lg min-w-[200px] transform hover:scale-105"
              >
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-primary hover:text-primary transition-all text-lg min-w-[200px] transform hover:scale-105">
                Watch Demo
              </button>
            </div>

            {/* Enterprise Metrics - Professional statistics */}
            <div className="grid grid-cols-2 gap-4 max-w-md lg:max-w-none">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-dark-lighter/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 hover:border-primary/50 transition-all group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{metric.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-xs text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Dashboard Preview */}
          <div className="relative lg:block hidden">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" 
                    alt="Dashboard Preview"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating UI Elements - Para sa interactive feel */}
                  {/* <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-black text-xs font-bold shadow-lg animate-pulse">
                    Live Preview
                  </div> */}
                  
                  {/* Stats overlay - Para makita ang data */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
                      <div className="text-primary text-xs font-semibold">Today's Sales</div>
                      <div className="text-white text-lg font-bold">₱12.5K</div>
                      <div className="text-green-400 text-xs">↑ 12%</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
                      <div className="text-primary text-xs font-semibold">Orders</div>
                      <div className="text-white text-lg font-bold">24</div>
                      <div className="text-green-400 text-xs">↑ 8%</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
                      <div className="text-primary text-xs font-semibold">Customers</div>
                      <div className="text-white text-lg font-bold">156</div>
                      <div className="text-green-400 text-xs">↑ 15%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards - Para sa interactive effect */}
              <div className="absolute -top-4 -right-4 bg-dark-lighter border border-gray-800/50 rounded-xl p-4 shadow-xl w-48 animate-bounce hidden lg:block" style={{ animationDuration: '3s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">📊</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Real-Time</div>
                    <div className="text-gray-400 text-xs">Analytics</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-dark-lighter border border-gray-800/50 rounded-xl p-4 shadow-xl w-48 animate-bounce hidden lg:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📱</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Works Anywhere</div>
                    <div className="text-gray-400 text-xs">Desktop & Mobile</div>
                  </div>
                </div>
              </div>

              {/* Glow Effect - Para sa interactive feel */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Interactive Badge - Para sa engagement */}
            {/* <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden xl:block">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-full p-4 shadow-2xl shadow-primary/50 animate-pulse">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl">→</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Mobile Dashboard Preview - Para sa mobile view */}
          <div className="lg:hidden mt-8">
            <div className="relative rounded-xl overflow-hidden border border-gray-800/50 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                alt="Dashboard Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-black text-xs font-bold shadow-lg">
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
