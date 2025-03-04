import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Award, Users, Target, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sudha Ellison Mathe",
      role: "CEO & Founder",
      position: "Deputy Director, IIEC, VIT-AP",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Shailaj Goud Makapuram",
      role: "Lead",
      position: "PrayanaElectric Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Marugani Reddi sekhar",
      role: "Web developer",
      position: "PrayanaElectric Pvt. Ltd.",
      image: "sekhar.jpg"
    },
    {
      name: "Manikanti abinay babu",
      role: "Web developer",
      position: "PrayanaElectric Pvt. Ltd.",
      image: "/abinay.jpg"
    },
    {
      name: "Lohit Apuroop",
      role: "Marketing Dept",
      position: "PrayanaElectric Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Ritika Reddy",
      role: "IoT Dept",
      position: "PrayanaElectric Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Anish Bhaktula",
      role: "Web Development",
      position: "PrayanaElectric Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Prayana Electric</h1>
            <p className="text-xl mb-8">
              Your gateway to the future of transportation! We're here to transform the way you commute, combining adventure, sustainability, and cutting-edge innovation into every ride.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to make daily commutes exciting, effortless, and eco-friendly through our range of electric bikes. We're committed to reducing carbon footprints while delivering unmatched performance and style.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a future where every ride contributes to reducing carbon footprints while delivering unmatched performance and style. We aim to revolutionize transportation across India, one electric bike at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                At Prayana Electric, our e-bikes are designed to meet the demands of modern transportation. With precision engineering, smart technology, and sleek aesthetics, our bikes offer smooth, safe, and efficient rides for urban commuters and adventure seekers alike.
              </p>
              <p className="text-gray-600 mb-6">
                Whether navigating through city streets or exploring scenic trails, we ensure you travel in comfort and with confidence. We are dedicated to turning your journeys into experiences, combining practicality with joy.
              </p>
              <p className="text-gray-600">
                Our bikes are equipped with advanced features like AI-driven battery management, IoT-enabled anti-theft systems, and pothole detection technology, making every ride as safe and convenient as it is sustainable. With Prayana Electric, you're choosing innovation that goes beyond expectations.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Prayana Electric Bike" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    Precision. Protection. Positivity.
                  </p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-lg font-semibold mb-2">Founded in 2023</p>
                <p>Headquartered in Amaravati, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Prayana Electric, we stand for Precision, Protection, and Positivity, blending cutting-edge technology with environmental consciousness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product design to customer service. Our commitment to quality ensures that every e-bike meets the highest standards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the heart of our business. We're committed to reducing carbon emissions and promoting sustainable transportation solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our customers, partners, and communities. Together, we can create a cleaner, greener future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is passionate about electric mobility and committed to delivering exceptional products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Company Information</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Specialties</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Electric Vehicle Manufacturing
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Electric Mobility
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      E-Bikes
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Company Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Company Size:</span>
                      11 – 15 Employees
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Headquarters:</span>
                      Amaravati, Andhra Pradesh
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Founded:</span>
                      2023
                    </li>
                  </ul>
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
            <h2 className="text-3xl font-bold mb-6">Join Us in Revolutionizing Transportation</h2>
            <p className="text-xl mb-8">
              Together, let's ride into a cleaner, greener, and smarter future. Happy Riding!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/book-now" 
                className="px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                Book Now
              </Link>
              <Link 
                to="/test-ride" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Schedule a Test Ride
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;