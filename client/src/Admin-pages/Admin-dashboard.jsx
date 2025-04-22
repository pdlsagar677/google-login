import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // If not logged in or not an admin, redirect
    if (!user || user.role !== "admin") {
      navigate("/home"); // or navigate("/"); if you prefer landing
    }
  }, [user, navigate]);

  // Optionally show nothing or a loading spinner while checking
  if (!user || user.role !== "admin") return null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600 mt-4">Welcome, Admin. Manage users and content here.</p>
    </div>
  );
};

export default AdminDashboard;
