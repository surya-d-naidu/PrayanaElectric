import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bike className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent">
                PrayanaElectric
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Redefining mobility with innovation and sustainability at the forefront. Our mission is to make daily commutes exciting, effortless, and eco-friendly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/models" className="text-gray-400 hover:text-white transition-colors">Models</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/locate-us" className="text-gray-400 hover:text-white transition-colors">Locate Us</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/book-now" className="text-gray-400 hover:text-white transition-colors">Book Now</Link>
              </li>
              <li>
                <Link to="/test-ride" className="text-gray-400 hover:text-white transition-colors">Test Ride</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-green-500" />
                <span className="text-gray-400">Amaravati, Andhra Pradesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-green-500" />
                <span className="text-gray-400">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-green-500" />
                <span className="text-gray-400">info@prayanaelectric.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PrayanaElectric Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;