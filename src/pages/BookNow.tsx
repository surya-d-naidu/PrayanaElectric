import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, Clock, CreditCard, User, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const BookNow = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modelId = queryParams.get('model');

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    modelId: modelId || '',
    startDate: '',
    endDate: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    agreeTerms: false
  });

  const bikeModels = [
    { id: '1', name: "Urban Commuter Pro", price: 499, image: "https://images.unsplash.com/photo-1623781970232-5d2d4b58fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { id: '2', name: "Mountain Explorer X1", price: 699, image: "https://images.unsplash.com/photo-1575385384546-a8f7101d5519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { id: '3', name: "Cruiser Comfort Elite", price: 599, image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" },
    { id: '4', name: "Folding Commuter Mini", price: 399, image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { id: '5', name: "Road Master Speed", price: 799, image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
    { id: '6', name: "Cargo Utility Pro", price: 649, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80" }
  ];

  const locations = [
    { id: '1', name: "Prayana Electric Headquarters", address: "123 Tech Park, Amaravati, Andhra Pradesh" },
    { id: '2', name: "Prayana Electric City Center", address: "456 Main Street, Vijayawada, Andhra Pradesh" },
    { id: '3', name: "Prayana Electric Experience Center", address: "789 Beach Road, Visakhapatnam, Andhra Pradesh" }
  ];

  useEffect(() => {
    if (modelId) {
      setFormData(prev => ({ ...prev, modelId }));
    }
  }, [modelId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log('Booking submitted:', formData);
      // Redirect to confirmation or process payment
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const calculateTotal = () => {
    const selectedModel = bikeModels.find(model => model.id === formData.modelId);
    if (!selectedModel || !formData.startDate || !formData.endDate) return 0;
    
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    
    return selectedModel.price * days;
  };

  const selectedModel = bikeModels.find(model => model.id === formData.modelId);

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your E-Bike</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Complete the booking process to reserve your electric bike. We'll prepare everything for your arrival.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= i ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > i ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    i
                  )}
                </div>
                <div className="text-xs mt-2 text-gray-500">
                  {i === 1 && 'Select Bike'}
                  {i === 2 && 'Booking Details'}
                  {i === 3 && 'Personal Info'}
                  {i === 4 && 'Payment'}
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200"></div>
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-green-600 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Select Bike */}
              {step === 1 && (
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-6">Select Your E-Bike Model</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bikeModels.map((model) => (
                      <div 
                        key={model.id}
                        className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                          formData.modelId === model.id 
                            ? 'border-green-500 ring-2 ring-green-500 ring-opacity-50' 
                            : 'border-gray-200 hover:border-green-200'
                        }`}
                        onClick={() => setFormData({ ...formData, modelId: model.id })}
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={model.image} 
                            alt={model.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold">{model.name}</h3>
                            <div className="text-green-600 font-bold">₹{model.price}/day</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {formData.modelId === model.id && (
                                <span className="text-green-600 flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-1" /> Selected
                                </span>
                              )}
                            </div>
                            <button
                              type="button"
                              className={`text-sm ${
                                formData.modelId === model.id 
                                  ? 'text-green-600' 
                                  : 'text-blue-600'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`/models?highlight=${model.id}`, '_blank');
                              }}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Booking Details */}
              {step === 2 && (
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-6">Booking Details</h2>
                  
                  {selectedModel && (
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-6">
                      <img 
                        src={selectedModel.image} 
                        alt={selectedModel.name} 
                        className="w-20 h-20 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{selectedModel.name}</h3>
                        <p className="text-green-600">₹{selectedModel.price}/day</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Start Date
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.startDate}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                          End Date
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            name="endDate"
                            id="endDate"
                            required
                            min={formData.startDate || new Date().toISOString().split('T')[0]}
                            value={formData.endDate}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Pickup Location
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          name="location"
                          id="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                          <option value="">Select a location</option>
                          {locations.map(location => (
                            <option key={location.id} value={location.id}>
                              {location.name} - {location.address}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {formData.startDate && formData.endDate && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Booking Summary</h3>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600">Model:</span>
                          <span>{selectedModel?.name}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600">Daily Rate:</span>
                          <span>₹{selectedModel?.price}/day</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600">Duration:</span>
                          <span>
                            {formData.startDate && formData.endDate ? 
                              Math.max(1, Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24))) : 0} days
                          </span>
                        </div>
                        <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-bold">
                          <span>Total:</span>
                          <span>₹{calculateTotal()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {step === 3 && (
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        required
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="#" className="text-green-600 hover:text-green-500">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-green-600 hover:text-green-500">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">Booking Summary</h3>
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Model:</span>
                        <span>{selectedModel?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span>
                          {formData.startDate} to {formData.endDate} ({Math.max(1, Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24)))} days)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pickup Location:</span>
                        <span>{locations.find(loc => loc.id === formData.location)?.name}</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
                      <span>Total Amount:</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Method
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div 
                          className={`border rounded-lg p-4 cursor-pointer ${
                            formData.paymentMethod === 'card' 
                              ? 'border-green-500 bg-green-50' 
                              : 'border-gray-200'
                          }`}
                          onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                              checked={formData.paymentMethod === 'card'}
                              onChange={handleChange}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                            />
                            <label className="ml-2 block text-sm font-medium text-gray-700">
                              Credit/Debit Card
                            </label>
                          </div>
                        </div>
                        
                        <div 
                          className={`border rounded-lg p-4 cursor-pointer ${
                            formData.paymentMethod === 'upi' 
                              ? 'border-green-500 bg-green-50' 
                              : 'border-gray-200'
                          }`}
                          onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="upi"
                              checked={formData.paymentMethod === 'upi'}
                              onChange={handleChange}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                            />
                            <label className="ml-2 block text-sm font-medium text-gray-700">
                              UPI
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {formData.paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Card Number
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <CreditCard className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              name="cardNumber"
                              id="cardNumber"
                              required
                              value={formData.cardNumber}
                              onChange={handleChange}
                              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              name="cardExpiry"
                              id="cardExpiry"
                              required
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              className="block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              placeholder="MM/YY"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cardCvv"
                              id="cardCvv"
                              required
                              value={formData.cardCvv}
                              onChange={handleChange}
                              className="block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {formData.paymentMethod === 'upi' && (
                      <div>
                        <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                          UPI ID
                        </label>
                        <input
                          type="text"
                          name="upiId"
                          id="upiId"
                          required
                          className="block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="yourname@upi"
                        />
                      </div>
                    )}
                    
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> This is a demo booking system. No actual payment will be processed.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  {step < 4 ? 'Continue' : 'Complete Booking'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;