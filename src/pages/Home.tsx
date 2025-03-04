import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Battery, Shield, Leaf, Zap, MapPin, Users } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Electric Bike" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Prayana Electric</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Your adventure starts here!
            </p>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              We provide top-quality electric bikes for rent, ensuring a smooth and eco-friendly ride with the latest technology and safety features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/book-now" 
                className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Now
              </Link>
              <Link 
                to="/models" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors flex items-center"
              >
                Explore Models <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <a href="#features" className="text-white flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our E-Bikes?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our electric bikes combine cutting-edge technology with comfort and style, providing an unmatched riding experience.
            </p>
          </motion.div>
          
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Battery className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long Battery Life</h3>
              <p className="text-gray-600">
                Our bikes feature high-capacity batteries that last for extended periods, reducing frequent charging interruptions.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Safety</h3>
              <p className="text-gray-600">
                Safety is our priority, with advanced brakes, anti-skid tires, and intelligent systems for a secure ride.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Zero emissions and recyclable components make our e-bikes the perfect choice for environmentally conscious riders.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Charging</h3>
              <p className="text-gray-600">
                Reduce downtime with our fast charging technology, getting you back on the road quickly.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">GPS Tracking</h3>
              <p className="text-gray-600">
                Anti-theft system with GPS tracking allows real-time monitoring on your mobile device.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Everyone</h3>
              <p className="text-gray-600">
                Whether you're commuting, exercising, or exploring, our e-bikes are perfect for all your needs.
              </p>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <Link 
              to="/features" 
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              Explore all features <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Model Showcase */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Future of Mobility</h2>
                <p className="text-gray-300 mb-8">
                  Our e-bikes are equipped with the latest technology, offering multiple riding modes and a range of up to 100 km per charge. The intelligent battery system evaluates condition, charge capacity, and health status for optimal performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/test-ride" 
                    className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
                  >
                    Book a Test Ride
                  </Link>
                  <Link 
                    to="/models" 
                    className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                  >
                    View Models
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Electric Bike Model" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Premium E-Bike Models</h3>
                  <p className="text-gray-200">Cutting-edge design meets exceptional performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their Prayana Electric experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The e-bike from Prayana Electric transformed my daily commute. It's comfortable, fast, and the battery lasts much longer than expected. The anti-theft system gives me peace of mind when parking in the city."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-gray-500 text-sm">Daily Commuter</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As a weekend explorer, I've tried many e-bikes, but Prayana Electric stands out. The pothole detection feature is a game-changer on rough terrain, and the customer service is exceptional. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Rahul Patel</h4>
                  <p className="text-gray-500 text-sm">Weekend Explorer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I rented an e-bike for a week during my vacation in Amaravati, and it was the best decision. The geofencing alerts kept me within tourist-friendly areas, and the bike's performance was outstanding even on hilly terrain."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80" 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Ananya Desai</h4>
                  <p className="text-gray-500 text-sm">Tourist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Future of Mobility?</h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of satisfied riders who have made the switch to eco-friendly, efficient, and enjoyable transportation.
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

export default Home;