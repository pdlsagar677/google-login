import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaHotel, FaUtensils, FaBus, FaTicketAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedOffer, setExpandedOffer] = useState(null);

  const toggleOffer = (id) => {
    setExpandedOffer(expandedOffer === id ? null : id);
  };

  const featuredPackages = [
    {
      id: 1,
      title: 'Luxury Maldives Escape',
      description: '7 nights in overwater bungalow with private pool, all meals included, spa credits, and private transfers',
      price: '$4,999',
      originalPrice: '$5,799',
      rating: 4.9,
      duration: '7 Days',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Private overwater villa', 'All-inclusive gourmet dining', 'Daily spa treatments', 'Private speedboat transfers'],
      offer: 'Limited time: Free couple massage and sunset cruise'
    },
    {
      id: 2,
      title: 'European Grand Tour',
      description: '14-day journey through Paris, Rome, and Barcelona with premium hotels and expert guides',
      price: '$3,299',
      originalPrice: '$3,899',
      rating: 4.8,
      duration: '14 Days',
      category: 'premium',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Skip-the-line access to attractions', 'Local culinary experiences', 'First-class train travel', 'Small group (max 12 people)'],
      offer: 'Early bird discount: Save $600 when booked 90+ days in advance'
    },
    {
      id: 3,
      title: 'Bali Adventure Package',
      description: '10 days exploring Bali\'s culture, beaches, and jungles with comfortable boutique hotels',
      price: '$1,499',
      originalPrice: '$1,799',
      rating: 4.7,
      duration: '10 Days',
      category: 'standard',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Surfing lessons included', 'Traditional cooking class', 'Private driver for excursions', 'Daily breakfast'],
      offer: 'Complimentary airport transfers and SIM card'
    },
    {
      id: 4,
      title: 'Japan Cherry Blossom Tour',
      description: '8-day cultural immersion during sakura season with traditional ryokan stays',
      price: '$2,899',
      originalPrice: '$3,299',
      rating: 4.9,
      duration: '8 Days',
      category: 'premium',
      image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Kyoto tea ceremony', 'Tokyo food tour', 'Bullet train experience', 'Hanami picnic under blossoms'],
      offer: 'Free upgrade to business class on select flights'
    },
    {
      id: 5,
      title: 'Thailand Budget Explorer',
      description: '12-day backpacker-friendly tour covering Bangkok, Chiang Mai, and southern islands',
      price: '$799',
      originalPrice: '$999',
      rating: 4.5,
      duration: '12 Days',
      category: 'budget',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Hostel accommodations', 'Local transportation', 'Island hopping tour', 'Street food crawl'],
      offer: 'Free night market tour and travel insurance included'
    },
    {
      id: 6,
      title: 'Safari Luxury Adventure',
      description: '10-day private safari in Tanzania with luxury tented camps and wildlife experts',
      price: '$7,500',
      originalPrice: '$8,250',
      rating: 5.0,
      duration: '10 Days',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      highlights: ['Private game drives', 'Hot air balloon safari', 'Bush dinners under stars', 'Conservation expert guide'],
      offer: 'Exclusive: Helicopter transfer to Serengeti'
    }
  ];

  const services = [
    {
      title: 'Custom Itineraries',
      description: 'Tailor-made travel plans designed specifically for your preferences and needs',
      icon: <FaMapMarkerAlt className="text-4xl text-cyan-600" />
    },
    {
      title: 'Flight Bookings',
      description: 'Best deals on flights with premium and economy options worldwide',
      icon: <FaTicketAlt className="text-4xl text-cyan-600" />
    },
    {
      title: 'Hotel Reservations',
      description: 'From luxury resorts to boutique hotels and budget stays',
      icon: <FaHotel className="text-4xl text-cyan-600" />
    },
    {
      title: 'Dining Experiences',
      description: 'Reservations at top restaurants and unique culinary adventures',
      icon: <FaUtensils className="text-4xl text-cyan-600" />
    },
    {
      title: 'Transportation',
      description: 'Private transfers, car rentals, and local transportation solutions',
      icon: <FaBus className="text-4xl text-cyan-600" />
    },
    {
      title: 'Activity Planning',
      description: 'Tours, excursions, and special activities at your destination',
      icon: <FaCalendarAlt className="text-4xl text-cyan-600" />
    }
  ];

  const filteredPackages = activeTab === 'all' 
    ? featuredPackages 
    : featuredPackages.filter(pkg => pkg.category === activeTab);

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Special Offers</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover unforgettable journeys tailored to every budget and dream. Limited-time offers available across all our packages.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Comprehensive Travel Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Featured Packages & Special Offers</h2>
            <div className="flex space-x-2 bg-white p-1 rounded-full shadow-sm">
              {[
                { id: 'all', label: 'All' },
                { id: 'luxury', label: 'Luxury' },
                { id: 'premium', label: 'Premium' },
                { id: 'standard', label: 'Standard' },
                { id: 'budget', label: 'Budget' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-cyan-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map(pkg => (
              <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-cyan-800 px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-bold">{pkg.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
                    <div className="flex flex-col items-end">
                      <span className="text-cyan-600 font-bold text-lg">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-gray-400 text-sm line-through">{pkg.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{pkg.duration}</span>
                  </div>
                  
                  <button 
                    onClick={() => toggleOffer(pkg.id)}
                    className="w-full flex items-center justify-between text-cyan-600 font-medium mb-4"
                  >
                    <span>Special Offer</span>
                    {expandedOffer === pkg.id ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  
                  {expandedOffer === pkg.id && (
                    <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                      <p className="text-cyan-700 font-medium">{pkg.offer}</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-700 mb-2">Package Highlights:</h4>
                    <ul className="space-y-1 text-gray-600">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-600 mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-bold">
                      Book Now
                    </button>
                    <button className="flex-1 border border-cyan-600 text-cyan-600 hover:bg-cyan-50 py-2 rounded-lg font-bold">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price Range Comparison */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Options For Every Budget</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                tier: 'Budget',
                price: '$500-$1,200',
                description: 'Great value experiences for cost-conscious travelers',
                features: ['Hostel/budget hotels', 'Local transportation', 'Basic tours', 'Some meals included'],
                color: 'bg-blue-100 text-blue-800'
              },
              {
                tier: 'Standard',
                price: '$1,200-$2,500',
                description: 'Comfortable travel with good amenities',
                features: ['3-4 star hotels', 'Some private transfers', 'Guided tours', 'Breakfast included'],
                color: 'bg-green-100 text-green-800'
              },
              {
                tier: 'Premium',
                price: '$2,500-$5,000',
                description: 'Enhanced experiences with premium services',
                features: ['4-5 star hotels', 'Private transfers', 'Expert guides', 'Some meals included'],
                color: 'bg-purple-100 text-purple-800'
              },
              {
                tier: 'Luxury',
                price: '$5,000+',
                description: 'Ultimate indulgence and personalized service',
                features: ['Luxury resorts/villas', 'Private chauffeur', 'VIP experiences', 'All meals included'],
                color: 'bg-yellow-100 text-yellow-800'
              }
            ].map((tier, index) => (
              <div key={index} className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className={`p-4 text-center ${tier.color}`}>
                  <h3 className="text-xl font-bold">{tier.tier}</h3>
                  <p className="text-lg font-medium">{tier.price}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <h4 className="font-bold text-gray-700 mb-2">Includes:</h4>
                  <ul className="space-y-2 text-gray-600">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cyan-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-bold">
                    View {tier.tier} Tours
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            Our travel specialists can create a completely customized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold">
              Request Custom Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-700 px-8 py-3 rounded-lg font-bold">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;