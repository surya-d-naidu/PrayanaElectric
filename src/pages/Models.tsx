import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, Clock, ChevronRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Models = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const bikeModels = [
    {
      id: 1,
      name: "Urban Commuter Pro",
      category: "city",
      description: "An e-bike designed for city commuting with a sleek frame, comfortable riding position, and excellent maneuverability in traffic. Features multiple riding modes, a durable aluminum frame, and a range of up to 80 km per charge. Advanced safety features include hydraulic disc brakes and anti-skid tires for a secure ride in urban environments.",
      price: 1499,
      range: 80,
      chargingTime: 3.5,
      image: "https://images.unsplash.com/photo-1623781970783-7f1e27a33ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "Mountain Explorer X1",
      category: "mountain",
      description: "A robust e-bike built for off-road adventures with a powerful motor, sturdy suspension, and all-terrain tires. Features multiple riding modes, a reinforced frame, and a range of up to 70 km per charge. Safety features include hydraulic disc brakes and advanced traction control for challenging terrain.",
      price: 2299,
      range: 70,
      chargingTime: 4,
      image: "https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "Cruiser Comfort Elite",
      category: "cruiser",
      description: "A comfortable e-bike designed for leisurely rides with an upright position, plush saddle, and smooth-rolling tires. Features multiple riding modes, a step-through frame, and a range of up to 90 km per charge. Safety features include integrated lights and a stable, low center of gravity design.",
      price: 1799,
      range: 90,
      chargingTime: 3,
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80"
    },
    {
      id: 4,
      name: "Folding Commuter Mini",
      category: "folding",
      description: "A compact, foldable e-bike perfect for mixed commutes and limited storage spaces. Features a quick-fold mechanism, lightweight design, and a range of up to 60 km per charge. Safety features include integrated lights and a horn for urban visibility.",
      price: 1299,
      range: 60,
      chargingTime: 2.5,
      image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      name: "Road Master Speed",
      category: "road",
      description: "A high-performance e-bike built for speed and efficiency on paved roads with aerodynamic design and lightweight components. Features multiple riding modes, a carbon fiber frame, and a range of up to 100 km per charge. Safety features include high-performance disc brakes and stability control.",
      price: 2599,
      range: 100,
      chargingTime: 3.5,
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      name: "Cargo Utility Pro",
      category: "cargo",
      description: "A practical e-bike designed for carrying loads with a reinforced frame, stable handling, and ample storage options. Features multiple riding modes, a sturdy rear rack, and a range of up to 75 km per charge. Safety features include powerful brakes and low-speed stability assistance.",
      price: 1999,
      range: 75,
      chargingTime: 4,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80"
    }
  ];

  const filteredModels = activeFilter === 'all' 
    ? bikeModels 
    : bikeModels.filter(model => model.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Models' },
    { id: 'city', name: 'City' },
    { id: 'mountain', name: 'Mountain' },
    { id: 'cruiser', name: 'Cruiser' },
    { id: 'folding', name: 'Folding' },
    { id: 'road', name: 'Road' },
    { id: 'cargo', name: 'Cargo' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our E-Bike Models</h1>
            <p className="text-xl mb-8">
              Discover the perfect electric bike for your lifestyle. From city commuters to off-road adventurers, we have the ideal model for you.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100 sticky top-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <h2 className="text-lg font-medium">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {model.category.charAt(0).toUpperCase() + model.category.slice(1)}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Battery className="h-3 w-3 mr-1" /> {model.range} km
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      <Clock className="h-3 w-3 mr-1" /> {model.chargingTime}h
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">₹{model.price}</div>
                    <Link 
                      to={`/book-now?model=${model.id}`}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Book Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Our Models</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find the perfect e-bike by comparing specifications across our range of models.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Model</th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Category</th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Range</th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Charging Time</th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Price</th>
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bikeModels.map((model) => (
                  <tr key={model.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-800 font-medium">{model.name}</td>
                    <td className="py-4 px-6 text-gray-600">{model.category.charAt(0).toUpperCase() + model.category.slice(1)}</td>
                    <td className="py-4 px-6 text-gray-600">{model.range} km</td>
                    <td className="py-4 px-6 text-gray-600">{model.chargingTime} hours</td>
                    <td className="py-4 px-6 text-gray-800 font-semibold">₹{model.price}</td>
                    <td className="py-4 px-6">
                      <Link 
                        to={`/book-now?model=${model.id}`}
                        className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                      >
                        Book
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Not Sure Which Model Is Right For You?</h2>
            <p className="text-xl mb-8">
              Schedule a test ride and experience our e-bikes firsthand. Our experts will help you find the perfect match for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/test-ride" 
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                Schedule Test Ride
              </Link>
              <Link 
                to="/locate-us" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Find Nearest Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;