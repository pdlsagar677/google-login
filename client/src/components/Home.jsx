import React from 'react';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock ,FaUser} from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

const HomePage = () => {
  const featuredTours = [
    {
      id: 1,
      title: 'Bali Paradise',
      description: '7 days in the tropical paradise of Bali with luxury resorts',
      price: '$1299',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.8
    },
    {
      id: 2,
      title: 'European Adventure',
      description: '14-day tour through Paris, Rome and Barcelona',
      price: '$2499',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Japanese Culture',
      description: '10-day immersion in Tokyo and Kyoto traditions',
      price: '$1899',
      image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'The Bali trip was beyond amazing! Everything was perfectly organized.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      comment: 'Best travel agency I\'ve worked with. Will book again for sure!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emma Williams',
      comment: 'The European tour exceeded all our expectations. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Dream Vacation</h1>
            <p className="text-xl mb-8">Explore the world's most breathtaking destinations with our expertly crafted tours and travel packages.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-cyan-800 px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
                Explore Tours
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-cyan-700 px-6 py-3 rounded-lg font-medium transition-all">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto -mt-12 bg-white rounded-xl shadow-xl p-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Destination</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <input type="text" placeholder="Where to?" className="pl-10 w-full p-3 border rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Check In</label>
            <input type="date" className="w-full p-3 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Check Out</label>
            <input type="date" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-lg font-bold">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">We provide the best travel experiences with our exceptional services</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-600 text-4xl mb-4">
                <FaPlane />
              </div>
              <h3 className="text-xl font-bold mb-2">Flight Booking</h3>
              <p className="text-gray-600">We find the best flight deals to get you to your dream destination.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-600 text-4xl mb-4">
                <FaHotel />
              </div>
              <h3 className="text-xl font-bold mb-2">Hotel Reservation</h3>
              <p className="text-gray-600">Luxury accommodations that match your preferences and budget.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-cyan-600 text-4xl mb-4">
                <FaUmbrellaBeach />
              </div>
              <h3 className="text-xl font-bold mb-2">Tailored Packages</h3>
              <p className="text-gray-600">Customized travel packages designed just for your needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Tours</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Explore our most popular travel packages</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map(tour => (
              <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{tour.title}</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">{tour.rating} ★</span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-600 font-bold">{tour.price}</span>
                    <button className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center">
                      View Details <FiChevronRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold">
              View All Tours
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Travel Agency</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Wanderlust Travel has been creating unforgettable travel experiences for thousands of happy customers worldwide.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of travel experts carefully curates each tour package to ensure you get the most authentic and memorable experience at every destination.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-cyan-100 p-2 rounded-full mr-4">
                  <FaPlane className="text-cyan-600" />
                </div>
                <span className="font-medium">10+ years of experience</span>
              </div>
              <div className="flex items-center">
                <div className="bg-cyan-100 p-2 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-cyan-600" />
                </div>
                <span className="font-medium">100+ destinations worldwide</span>
              </div>
              <div className="flex items-center">
                <div className="bg-cyan-100 p-2 rounded-full mr-4">
                  <FaUser className="text-cyan-600" />
                </div>
                <span className="font-medium">50,000+ satisfied customers</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Travel team" 
              className="rounded-xl shadow-xl w-full" 
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Hear from travelers who've experienced our tours</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our tours or need help with your booking? Our travel experts are here to help you plan your perfect vacation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">info@wanderlusttravel.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <FaClock className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-600">Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-lg font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 max-w-2xl mx-auto">Get the latest travel deals, tips, and destination inspiration straight to your inbox.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-cyan-800 px-6 py-3 rounded-lg font-bold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default HomePage;