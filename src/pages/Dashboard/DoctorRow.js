import React from "react";

const DoctorRow = ({doctor, index,refetch,setDeleteDoctor}) => {
  const { name, img, email, specialty } = doctor;
  
  return (
    <tr class="hover">
      <th></th>
      <td>
        <div class="avatar">
          <div class="w-12">
            <img src={img} alt="img" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
    
      <td>  <label onClick={()=> setDeleteDoctor(doctor)} for="delete-modal" class="btn btn-xs btn-error modal-button">Delete</label></td>
    </tr>
  );
};

export default DoctorRow;
