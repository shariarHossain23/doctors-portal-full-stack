import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DeleteDoctorModal from "./DeleteDoctorModal";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
   const [deleteDoctor,setDeleteDoctor] = useState(null);
  const { data: doctors, isLoading,refetch} = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>email</th>
              <th>specialty</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>

              {
                  doctors.map((doctor,index) => <DoctorRow
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                  setDeleteDoctor={setDeleteDoctor}
                  ></DoctorRow>  )
              }
          </tbody>
        </table>
      </div>
      {
         deleteDoctor&& <DeleteDoctorModal
         deleteDoctor={deleteDoctor}
         setDeleteDoctor={setDeleteDoctor}
         refetch={refetch}
         ></DeleteDoctorModal>
      }
    </div>
  );
};

export default ManageDoctor;
