import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaHotel, FaPlane, FaSignOutAlt, FaHistory } from 'react-icons/fa';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [bookingsLoading, setBookingsLoading] = useState(true);
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            setLoading(true);
            const apiResponse = await fetch('http://localhost:5000/api/auth/get-user', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!apiResponse.ok) throw new Error('Unauthorized');

            const responseData = await apiResponse.json();

            if (!responseData.success) {
                throw new Error(responseData.message || 'Failed to fetch user data');
            }

            setUserData(responseData.user);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    const getBookings = async () => {
        try {
            setBookingsLoading(true);
            const response = await fetch('http://localhost:5000/api/bookings/user-bookings', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Failed to fetch bookings');

            const data = await response.json();
            if (data.success) {
                setBookings(data.bookings);
            } else {
                throw new Error(data.message || 'Failed to load bookings');
            }
        } catch (err) {
            console.error('Bookings error:', err);
        } finally {
            setBookingsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/logout-user', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Failed to logout');

            const result = await response.json();
            if (result.success) {
                setUserData(null);
                alert('Logged out successfully');
                navigate('/home');
            } else {
                throw new Error(result.message || 'Logout failed');
            }
        } catch (err) {
            console.error('Logout error:', err);
            alert(`Logout failed: ${err.message}`);
        }
    };

    useEffect(() => {
        getUser();
        getBookings();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: {error}
            </div>
        </div>
    );

    if (!userData) return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                No user data available
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            {/* Profile Section */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                    <div className="flex items-center">
                        {userData.avatar ? (
                            <img
                                src={userData.avatar}
                                alt="User"
                                className="w-20 h-20 rounded-full border-4 border-white"
                            />
                        ) : (
                            <div className="w-20 h-20 rounded-full border-4 border-white bg-blue-400 flex items-center justify-center">
                                <FaUser className="text-white text-3xl" />
                            </div>
                        )}
                        <div className="ml-6">
                            <h1 className="text-2xl font-bold">{userData.name}</h1>
                            <p className="text-blue-100">{userData.email}</p>
                        </div>
                    </div>
                </div>
                
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <FaUser className="mr-2 text-blue-600" /> Personal Info
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-gray-500">Full Name</p>
                                    <p className="font-medium">{userData.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">{userData.email}</p>
                                </div>
                                {userData.phoneNumber && (
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">{userData.phoneNumber}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* My Bookings Section */}
                        <div className="md:col-span-2">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <FaCalendarAlt className="mr-2 text-blue-600" /> My Bookings
                            </h2>
                            
                            {bookingsLoading ? (
                                <div className="flex justify-center py-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            ) : bookings.length > 0 ? (
                                <div className="space-y-4">
                                    {bookings.map((booking) => (
                                        <div key={booking._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-gray-800">{booking.tourName}</h3>
                                                    <p className="text-sm text-gray-600">{new Date(booking.tourDate).toLocaleDateString()}</p>
                                                </div>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    booking.status === 'confirmed' 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : booking.status === 'pending' 
                                                            ? 'bg-yellow-100 text-yellow-800' 
                                                            : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <div className="mt-2 flex justify-between text-sm">
                                                <div className="flex items-center text-gray-600">
                                                    <FaHotel className="mr-1" />
                                                    <span>{booking.accommodation || 'Standard'}</span>
                                                </div>
                                                <div className="text-blue-600 font-medium">
                                                    ${booking.totalPrice}
                                                </div>
                                            </div>
                                            <button 
                                                className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
                                                onClick={() => navigate(`/booking-details/${booking._id}`)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-gray-50 p-6 rounded-lg text-center">
                                    <FaHistory className="text-gray-400 text-4xl mx-auto mb-4" />
                                    <p className="text-gray-600">You don't have any bookings yet</p>
                                    <button 
                                        className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                                        onClick={() => navigate('/tours')}
                                    >
                                        Browse Tours
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition duration-200 mx-auto"
                        >
                            <FaSignOutAlt className="mr-2" /> Logout
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Upcoming Trips Section */}
            {bookings.length > 0 && (
                <div className="max-w-4xl mx-auto mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <FaPlane className="mr-2 text-blue-600" /> Upcoming Trips
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {bookings
                            .filter(b => b.status === 'confirmed' && new Date(b.tourDate) > new Date())
                            .slice(0, 2)
                            .map(booking => (
                                <div key={booking._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold text-gray-800">{booking.tourName}</h3>
                                        <span className="text-sm text-gray-500">
                                            {new Date(booking.tourDate).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <div className="mt-2 flex justify-between items-center">
                                        <span className="text-sm text-gray-600">
                                            {booking.travelers} {booking.travelers > 1 ? 'travelers' : 'traveler'}
                                        </span>
                                        <button 
                                            className="text-sm bg-blue-100 text-blue-600 hover:bg-blue-200 px-3 py-1 rounded"
                                            onClick={() => navigate(`/booking-details/${booking._id}`)}
                                        >
                                            View Itinerary
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;