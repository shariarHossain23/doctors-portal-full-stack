import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppoitment = () => {
  const [appointments, setAppoitment] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  useEffect(() => {
    console.log(user.email);
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`,{
        method:"GET",
        headers:{
          'authorization':`Bearer ${localStorage.getItem("userToken")}`
        }
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403){
            signOut(auth)
            navigate('/')
            localStorage.removeItem("useToken")
          }
          return res.json()
        })
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
                  appointments.map((appointment,index) =>
                    <tr>
                    <th>{index + 1}</th>
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
