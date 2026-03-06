function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">J</span>
              </div>
              <div>
                <h4 className="text-lg font-bold">JTECH SOLUTIONS</h4>
                <p className="text-xs text-gray-400">Business Made Easy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of business management solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Product</h5>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-primary transition text-sm">Features</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-primary transition text-sm">Solutions</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 JTech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition text-sm">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-primary transition text-sm">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-primary transition text-sm">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
