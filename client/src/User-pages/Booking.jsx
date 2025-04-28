import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaMapMarkerAlt, FaHotel, FaUtensils, FaBus, FaStar } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [travelers, setTravelers] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [packageData, setPackageData] = useState(null);

  // Fetch package data from the admin URL
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await fetch('/api/packages/1'); // Replace with your actual API URL
        const data = await response.json();
        setPackageData(data);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    fetchPackageData();
  }, []);

  const availableTimes = [
    '08:00 AM', '10:00 AM', '12:00 PM', 
    '02:00 PM', '04:00 PM', '06:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      package: packageData.title,
      travelers,
      date: selectedDate,
      time: selectedTime
    });
  };

  if (!packageData) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Package Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img 
                src={packageData.image} 
                alt={packageData.title} 
                className="w-full h-64 object-cover rounded-lg shadow-md" 
              />
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center bg-white bg-opacity-90 px-3 py-1 rounded-full border">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-bold">{packageData.rating}</span>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {packageData.category}
                </span>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{packageData.title}</h1>
              <p className="text-gray-600 mb-4">{packageData.description}</p>
              
              <div className="flex items-center text-gray-500 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{packageData.duration}</span>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-700 font-medium">{packageData.offer}</p>
              </div>
              
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-cyan-600 mr-3">{packageData.price}</span>
                {packageData.originalPrice && (
                  <span className="text-gray-400 text-lg line-through">{packageData.originalPrice}</span>
                )}
              </div>
              
              <div className="flex space-x-3">
                <button 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold"
                  onClick={() => setActiveTab('booking')}
                >
                  Book Now
                </button>
                <button className="border border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-bold">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Tabs */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'details' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('details')}
          >
            Package Details
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'itinerary' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('itinerary')}
          >
            Full Itinerary
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'booking' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('booking')}
          >
            Book Now
          </button>
        </div>

        {activeTab === 'details' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {packageData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h2>
              <ul className="space-y-2 mb-8">
                {packageData.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Not Included</h2>
              <ul className="space-y-2">
                {packageData.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-500">Destination</h4>
                    <p className="text-gray-800">Paris, Rome, Barcelona</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Group Size</h4>
                    <p className="text-gray-800">Max 12 travelers</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Physical Rating</h4>
                    <p className="text-gray-800">Moderate (walking involved)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">Age Requirement</h4>
                    <p className="text-gray-800">12+ years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'itinerary' && (
          <div className="space-y-8">
            {packageData.itinerary.map((day) => (
              <div key={day.day} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">Day {day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{day.title}</h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete Your Booking</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Departure Date</label>
                      <div className="relative">
                        <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
                      <div className="relative">
                        <FaClock className="absolute left-3 top-3 text-gray-400" />
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select a time</option>
                          {availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Number of Travelers</label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <select
                          value={travelers}
                          onChange={(e) => setTravelers(e.target.value)}
                          className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                          ))}
                        </select>
                        <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-bold">
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
