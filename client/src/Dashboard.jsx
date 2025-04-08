import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true);
                const apiResponse = await fetch('http://localhost:5000/api/auth/get-user', {
                    method: 'GET',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                if (!apiResponse.ok) {
                    throw new Error('Unauthorized');
                }
                
                const responseData = await apiResponse.json();
                
                if (!responseData.success) {
                    throw new Error(responseData.message || 'Failed to fetch user data');
                }
                
                // Set the user data from the response
                setUserData(responseData.user);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user:', error);
                setError(error.message);
                setLoading(false);
            }
        };
        
        getUser();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userData) return <div>No user data available</div>;
    
    return (
        <div>
            <h1>User Data</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone Number: {userData.phoneNumber}</p>
            {userData.avatar && <p>Avatar: {userData.avatar}</p>}
        </div>
    );
};

export default Dashboard;