import React from 'react';
import { FaGlobeAmericas, FaHeart, FaAward, FaUsers, FaLeaf } from 'react-icons/fa';

const AboutPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'Wanderlust made our Bali honeymoon absolutely magical. Every detail was perfect!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      trip: 'Bali Honeymoon Package'
    },
    {
      id: 2,
      name: 'Michael Chen',
      comment: 'The European tour was worth every penny. Our guide`s knowledge was incredible.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      trip: 'European Grand Tour'
    },
    {
      id: 3,
      name: 'Emma Williams',
      comment: 'Best travel agency I\'ve ever used. They handled everything seamlessly.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 4,
      trip: 'Japanese Cultural Journey'
    }
  ];

  const stats = [
    { value: '12+', label: 'Years Experience', icon: <FaAward className="text-3xl mb-2" /> },
    { value: '50K+', label: 'Happy Travelers', icon: <FaUsers className="text-3xl mb-2" /> },
    { value: '100+', label: 'Destinations', icon: <FaGlobeAmericas className="text-3xl mb-2" /> },
    { value: '98%', label: 'Satisfaction Rate', icon: <FaHeart className="text-3xl mb-2" /> }
  ];

  return (
    <div className="font-sans">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story, Your Journey</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover the passion behind Wanderlust and how we've been creating unforgettable travel experiences since 2010.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010 by travel enthusiasts Mark and Lisa, Wanderlust began as a small boutique agency with a big dream: to make extraordinary travel accessible to everyone.
            </p>
            <p className="text-gray-600 mb-6">
              What started as a passion project has grown into a trusted name in travel, with a team of 50+ experts crafting personalized journeys across all seven continents.
            </p>
            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-600">
              <p className="text-gray-700 italic">
                "Our mission is simple: to create travel experiences that don't just meet expectations, but exceed them in ways that leave lasting memories."
              </p>
              <p className="mt-2 font-medium">- Mark & Lisa, Founders</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Our team" 
              className="rounded-lg shadow-md h-64 w-full object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Travel planning" 
              className="rounded-lg shadow-md h-64 w-full object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Adventure" 
              className="rounded-lg shadow-md h-64 w-full object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Happy travelers" 
              className="rounded-lg shadow-md h-64 w-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-cyan-600 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-cyan-600">
              <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                <FaHeart className="text-cyan-600 mr-2" /> Passion for Travel
              </h3>
              <p className="text-gray-600">
                We live and breathe travel. Our team has visited every destination we offer, ensuring authentic recommendations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-yellow-400">
              <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                <FaUsers className="text-yellow-500 mr-2" /> Personalized Service
              </h3>
              <p className="text-gray-600">
                No two travelers are alike. We craft each itinerary to match your unique interests, pace, and budget.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                <FaLeaf className="text-green-500 mr-2" /> Sustainable Tourism
              </h3>
              <p className="text-gray-600">
                We're committed to responsible travel that benefits local communities and preserves natural wonders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Travel Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Mark Johnson',
                role: 'Founder & CEO',
                bio: '30+ countries visited, specializes in adventure travel',
                image: 'https://randomuser.me/api/portraits/men/75.jpg'
              },
              {
                name: 'Lisa Chen',
                role: 'Founder & COO',
                bio: 'Luxury travel expert, food and wine enthusiast',
                image: 'https://randomuser.me/api/portraits/women/65.jpg'
              },
              {
                name: 'David Wilson',
                role: 'Head of European Tours',
                bio: 'Born in London, knows every corner of Europe',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Maria Garcia',
                role: 'Asia Specialist',
                bio: 'Fluent in 4 Asian languages, cultural expert',
                image: 'https://randomuser.me/api/portraits/women/33.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Traveler Stories</h2>
          <p className="text-center text-cyan-100 max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Here's what our travelers say about their experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl text-gray-800 shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-3 italic">"{testimonial.comment}"</p>
                <p className="text-sm text-cyan-600 font-medium">{testimonial.trip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Create Your Perfect Trip?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our travel experts are standing by to help you plan an unforgettable journey tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-bold">
              Contact Our Team
            </button>
            <button className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 rounded-lg font-bold">
              Browse Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;