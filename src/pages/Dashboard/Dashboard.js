import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="px-12">
      <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content px-12">
          {/* <!-- Page content here --> */}
          <h2 className="text-2xl font-bold text-center text-purple-600">Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>Appointment</Link>
            </li>
           
            <li>
              <Link to='/dashboard/review'>Review</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
