import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
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
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>Appointment</Link>
            </li>
           
            <li>
              <Link to='/dashboard/review'>Review</Link>
            </li>
            <li>
              <Link to='/dashboard/myhistory'>My History</Link>
            </li>
           {
             admin && <>
             <li>
             <Link to='/dashboard/alluser'>ALl user</Link>
             <Link to='/dashboard/add-doctor'>Add Doctor</Link>
             <Link to='/dashboard/manage-doctor'>Manage doctor</Link>
           </li>
             </>
           }
           
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
