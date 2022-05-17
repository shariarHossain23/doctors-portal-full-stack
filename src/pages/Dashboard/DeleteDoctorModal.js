import { toast } from "react-toastify";

const DeleteDoctorModal = ({deleteDoctor,setDeleteDoctor,refetch}) => {
    const {email} = deleteDoctor
    const handleDeleteDoctor = () => {
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:"DELETE",
            headers:{
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
              toast.success("successfully deleted")
              refetch()
              setDeleteDoctor(null)
          }
            
        })
    }
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure want to delete?
          </h3>
          <div class="modal-action">
            <label onClick={handleDeleteDoctor} class="btn">
              Delete
            </label>
            <label for="delete-modal" class="btn">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctorModal;
