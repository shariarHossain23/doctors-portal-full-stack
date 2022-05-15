import React from 'react';
import { toast } from 'react-toastify';

const Userow = ({user,refetch}) => {
    const {email,role} = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:"PUT",
            headers:{
                authorization:`Bearer ${localStorage.getItem("userToken")}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error("failed to make admin")
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success("successfully make a admin")
             refetch()
            }
            
        })
    }
    return (
        <tr>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make admin</button>}</td>
        <td><button className='btn btn-xs'>Remove</button></td>
     
      </tr>
    );
};

export default Userow;