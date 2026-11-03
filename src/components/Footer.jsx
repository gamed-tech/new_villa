import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] text-[#4A5568] py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-[#auto] grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Column 1: Logo & Contact Info */}
        <div className="flex flex-col space-y-3">
          {/* Logo Placeholder - Replace with your <img src="path-to-logo.png" /> */}
          <div className="flex flex-col mb-2">
            <img src={logo} alt="logo" width="100"  />
          </div>

          <p className="text-sm font-medium text-[#2D3748]">
            +1 (7635) 547-12-97
          </p>
          <p className="text-sm font-medium text-[#2D3748]">
            support@lift.agency
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-[#1A202C] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#718096]">
            <li>
              <Link to="/" className="hover:text-[#8B2626] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/inventories" className="hover:text-[#8B2626] transition-colors">
                Inventories
              </Link>
            </li>
            <li>
              <Link to="/zones" className="hover:text-[#8B2626] transition-colors">
                Zones
              </Link>
            </li>
            <li>
              <Link to="/developers" className="hover:text-[#8B2626] transition-colors">
                Developers
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#8B2626] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: About */}
        <div>
          <h3 className="text-sm font-bold text-[#1A202C] mb-4">About</h3>
          <ul className="space-y-2 text-sm text-[#718096]">
            <li>
              <Link to="/about" className="hover:text-[#8B2626] transition-colors">
                Grand Atlas
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#8B2626] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/legal" className="hover:text-[#8B2626] transition-colors">
                Legal
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-[#8B2626] transition-colors">
                Help
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-[#8B2626] transition-colors">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Social Icons */}
        <div>
          <h3 className="text-sm font-bold text-[#1A202C] mb-4">Get In touch</h3>
          
          {/* Newsletter Input Form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex mb-6">
            <input
              type="email"
              placeholder="Get product updates"
              className="px-3 py-2 text-sm border border-r-0 border-[#8B2626] rounded-l-md focus:outline-none w-full bg-white text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-[#8B2626] hover:bg-[#701f1f] text-white px-4 rounded-r-md flex items-center justify-center transition-colors"
              aria-label="Subscribe"
            >
              
            </button>
          </form>

          {/* Social Media Links */}
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#8B2626] hover:bg-[#8B2626] hover:text-white transition-colors text-xs"
              aria-label="LinkedIn"
            >
              
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#8B2626] hover:bg-[#8B2626] hover:text-white transition-colors text-xs"
              aria-label="Facebook"
            >
              
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#8B2626] hover:bg-[#8B2626] hover:text-white transition-colors text-xs"
              aria-label="Twitter"
            >
              
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200/60 pt-6 text-center text-xs text-[#718096]">
        © 2020 Lift Media. All rights reserved
      </div>
    </footer>
  )
}