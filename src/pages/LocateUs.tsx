import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const LocateUs = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  
  const locations = [
    {
      id: 1,
      name: "Prayana Electric Headquarters",
      address: "123 Tech Park, Amaravati, Andhra Pradesh",
      phone: "+91 9876543210",
      email: "info@prayanaelectric.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30703.440080856897!2d80.49394387910156!3d16.515455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab1557a3c3d%3A0xc3671562e6ba7a6f!2sAmaravati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1653651234567!5m2!1sen!2sin"
    },
    {
      id: 2,
      name: "Prayana Electric City Center",
      address: "456 Main Street, Vijayawada, Andhra Pradesh",
      phone: "+91 9876543211",
      email: "vijayawada@prayanaelectric.com",
      hours: "Mon-Sat: 10:00 AM - 8:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61278.39739864995!2d80.60676082167967!3d16.50677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1653651234568!5m2!1sen!2sin"
    },
    {
      id: 3,
      name: "Prayana Electric Experience Center",
      address: "789 Beach Road, Visakhapatnam, Andhra Pradesh",
      phone: "+91 9876543212",
      email: "vizag@prayanaelectric.com",
      hours: "Mon-Sun: 9:00 AM - 7:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121394.70766244681!2d83.17486450000001!3d17.73199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1653651234569!5m2!1sen!2sin"
    }
  ];

  const toggleLocation = (index: number) => {
    setActiveLocation(index === activeLocation ? -1 : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Locate Us</h1>
            <p className="text-xl mb-8">
              Find our rental locations easily! Visit us to explore our e-bike models and experience the future of mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div 
                    key={location.id}
                    className={`border rounded-lg overflow-hidden transition-all ${
                      index === activeLocation ? 'border-green-500 shadow-md' : 'border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleLocation(index)}
                      className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center">
                        <MapPin className={`h-5 w-5 mr-2 ${index === activeLocation ? 'text-green-500' : 'text-gray-500'}`} />
                        <span className="font-medium">{location.name}</span>
                      </div>
                      {index === activeLocation ? (
                        <ChevronUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    <div 
                      className={`px-4 pb-4 transition-all duration-300 ${
                        index === activeLocation ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2" />
                          <span>{location.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-gray-500 mr-2" />
                          <span>{location.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-500 mr-2" />
                          <span>{location.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-gray-500 mr-2" />
                          <span>{location.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries, please contact us at:
                </p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-500 mr-2" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-500 mr-2" />
                    <span>info@prayanaelectric.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px]">
                <iframe 
                  src={locations[activeLocation >= 0 ? activeLocation : 0].mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prayana Electric Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealership Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Become a Dealer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Interested in becoming a Prayana Electric dealership? Join our growing network and be part of the electric mobility revolution.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Dealership Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive territory rights</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comprehensive training and support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Marketing and promotional assistance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Attractive margins and incentives</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to our growing customer base</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Apply for Dealership
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-800 p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Dealership Requirements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum investment capacity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suitable showroom space (min. 1000 sq. ft.)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Business experience (preferred)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commitment to brand values</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Passion for electric mobility</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-300">
                    For more information, contact our dealership team at <a href="mailto:dealership@prayanaelectric.com" className="text-green-400 hover:underline">dealership@prayanaelectric.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Us Today</h2>
            <p className="text-xl mb-8">
              Experience our e-bikes firsthand at any of our locations. Our experts are ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Directions
              </a>
              <a 
                href="tel:+919876543210" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocateUs;