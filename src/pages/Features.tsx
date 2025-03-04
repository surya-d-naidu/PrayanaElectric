import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Battery, Shield, MapPin, Cpu, Zap, Droplets, 
  Leaf, Cloud, Timer, Weight, Smartphone, Bell 
} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Battery className="h-8 w-8 text-green-600" />,
      title: "Long Battery Life",
      description: "Lasts for extended periods, reducing frequent charging interruptions."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Anti-Theft System",
      description: "GPS tracking allows real-time monitoring on your mobile device."
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title: "Geofencing Alerts",
      description: "Notifies you if the bike crosses a set radius."
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-600" />,
      title: "Real-Time Pothole Detection",
      description: "AI detects potholes to enhance rider safety."
    },
    {
      icon: <Battery className="h-8 w-8 text-indigo-600" />,
      title: "Intelligent Battery",
      description: "AI evaluates battery condition, charge capacity, and health status."
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-600" />,
      title: "Enhanced Safety",
      description: "Includes thermal protection, short-circuit prevention, and overcharge safeguards."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Eco Friendly",
      description: "Recyclable batteries adhering to sustainability standards."
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Weather Resistant",
      description: "Withstands diverse environmental conditions."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Fast Charging",
      description: "Reduces downtime with faster recharge cycles."
    },
    {
      icon: <Weight className="h-8 w-8 text-gray-600" />,
      title: "Lightweight Design",
      description: "Portable without compromising capacity."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "User Friendly Integration",
      description: "Provides comprehensive battery analytics and recommendations."
    },
    {
      icon: <Bell className="h-8 w-8 text-red-600" />,
      title: "Instant Mobile Notifications",
      description: "Sends alerts for unauthorized movement."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cutting-Edge Features</h1>
            <p className="text-xl mb-8">
              Our e-bikes are packed with innovative features designed to enhance your riding experience, safety, and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-green-200"
              >
                <div className="bg-gray-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the innovative technologies that power our e-bikes and set them apart from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="E-Bike Technology" 
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">AI-Powered Battery Management</h3>
              <p className="text-gray-600 mb-6">
                Our proprietary AI system continuously monitors and optimizes battery performance, extending lifespan and maximizing range. The system learns from your riding patterns to provide personalized recommendations for optimal usage.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Real-time health monitoring prevents battery degradation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Adaptive charging optimizes for different power sources</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Predictive analytics forecast remaining range with high accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">IoT-Enabled Security System</h3>
              <p className="text-gray-600 mb-6">
                Our integrated IoT security system provides peace of mind with real-time tracking, geofencing, and instant alerts. The system connects seamlessly with your smartphone for complete control and monitoring.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">GPS tracking with centimeter-level accuracy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Motion detection alerts for unauthorized movement</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Remote locking and unlocking via smartphone app</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="IoT Security" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Safety First</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your safety is our top priority. Our e-bikes are equipped with advanced safety features to ensure a secure and confident ride.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pothole Detection</h3>
              <p className="text-gray-600">
                Our AI-powered system detects potholes and road hazards in real-time, providing visual and audible alerts to help you navigate safely.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Braking</h3>
              <p className="text-gray-600">
                Hydraulic disc brakes with ABS provide reliable stopping power in all conditions, with automatic adjustment for wet surfaces.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Anti-Skid Tires</h3>
              <p className="text-gray-600">
                Specially designed tires with enhanced grip patterns maintain traction on wet and slippery surfaces for confident riding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience These Features Yourself</h2>
            <p className="text-xl mb-8">
              Book a test ride today and discover how our innovative features can transform your riding experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/test-ride" 
                className="px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                Schedule Test Ride
              </Link>
              <Link 
                to="/models" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                View Models
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;