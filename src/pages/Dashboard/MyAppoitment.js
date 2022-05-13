import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppoitment = () => {
  const [appointments, setAppoitment] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user.email);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppoitment(data));
    }
  }, [user]);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>serial</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>

              {
                  appointments.map(appointment =>
                    <tr>
                    <th>1</th>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.slot}</td>
                    <td>{appointment.treatment}</td>
                  </tr>
                  )
              }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoitment;
