import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Userow from './Userow';

const AllUser = () => {
    const {data:users,isLoading,refetch} = useQuery('users',()=> fetch('http://localhost:5000/user',{
        method:"GET",
        headers:{
            authorization:`Bearer ${localStorage.getItem("userToken")}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <h1>ALl User</h1>
        <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map(user => <Userow key={user._id} user={user} refetch={refetch}></Userow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;