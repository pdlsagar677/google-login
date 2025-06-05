import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar, FaCalendarAlt } from 'react-icons/fa';
import { useAuth } from '../store/Auth'; // adjust path accordingly

const ServicePage = () => {
  const { user, isLoggedIn } = useAuth();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPackages = async () => {
    try {
      if (!isLoggedIn()) {  // call isLoggedIn function here
        setPackages([]);
        setLoading(false);
        return;
      }

      const res = await axios.get('http://localhost:5000/api/admin/get-packages');
      const allPackages = Array.isArray(res.data.packages) ? res.data.packages : [];

      // Filter packages by current logged in user id safely
      const userId = user?._id;
      const userPackages = userId
        ? allPackages.filter(pkg => pkg.postedBy === userId)
        : [];

      setPackages(userPackages);
    } catch (err) {
      console.error('Error fetching packages:', err);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, [user]); // refetch if user changes

  if (!isLoggedIn()) {  // call here too
    return (
      <div className="font-sans bg-gray-50 p-10 text-center text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Please log in to see travel packages.</h2>
      </div>
    );
  }

  return (
    <div className="font-sans bg-gray-50">
      <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore New Adventures</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Freshly curated packages posted by you.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Your Posted Packages</h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading packages...</p>
          ) : (
            packages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map(pkg => (
                  <div key={pkg._id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
                        <div className="text-right">
                          <span className="text-cyan-600 font-bold text-lg">{pkg.price}</span>
                          {pkg.originalPrice && (
                            <div className="text-sm text-gray-400 line-through">{pkg.originalPrice}</div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      <div className="flex items-center text-gray-500 mb-4">
                        <FaCalendarAlt className="mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <FaStar className="text-yellow-400 mr-2" />
                        <span className="font-bold">{pkg.rating}</span>
                      </div>
                      <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-bold">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">You have not posted any packages yet.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
