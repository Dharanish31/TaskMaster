import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaUsers, FaClipboardList } from "react-icons/fa";




const AdminDashboard = () => {


  const navigate = useNavigate();
  useEffect(() => {
    const admin = localStorage.getItem("adminUsername");
    if (!admin) {
      navigate("/login");
    }
  }, [navigate]);


  return (
    <div className="container py-5">
      <h1 className="mb-4">Admin Dashboard</h1>

      <div className="row g-4">
        {/* Add Event Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Add Tasks</h5>
              <p className="card-text">Create a new tasks to display to users.</p>
              <Link to="/AddEventAdmin" className="btn btn-primary mt-auto">
                <FaPlus className="me-2" /> Create task
              </Link>
            </div>
          </div>
        </div>

        {/* Manage Users Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View all users, their emails, and Completed Records.</p>
              <Link to="/AdminUsers" className="btn btn-primary mt-auto">
                <FaUsers className="me-2" /> View Users
              </Link>

            </div>
          </div>
        </div>

        {/* Reservations Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Task Records</h5>
              <p className="card-text">Manage all Completed Records made by users.</p>
              <Link to="/AdminReservations" className="btn btn-primary mt-auto">
                <FaClipboardList className="me-2" /> View Task Records
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
