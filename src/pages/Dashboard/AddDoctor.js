import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  const imageStorageKey = "c694c4abb3bcf601b0b79494e815c533"
  const onSubmit = async (data) => {
     const image = data.image[0]
     const formData = new FormData();
     formData.append("image",image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    fetch(url,{
        method: "POST",
        body:formData
    })
    .then(res=> res.json())
    .then(result => {
        if(result.success){
            const img = result.data.url
            const doctor ={
                name:data.name,
                email:data.email,
                specialty:data.specialty,
                img:img
            }
            fetch("http://localhost:5000/doctor",{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                },
                body:JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success("doctors added successfully")
                    reset()
                }
                else{
                    toast.error("doctors added fail")
                }
            })
        }
       
    })
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add doctor</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name required",
                  },
                })}
                type="text"
                placeholder=" your name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "provided valid email",
                  },
                })}
                type="email"
                placeholder=" your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <select {...register("specialty")} class="select input-bordered w-full max-w-xs">
                {
                    services.map(service =>(
                        <option key={service._id} value={service.name}>{service.name}</option>
                    ))
                }
             
            </select>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "photo required",
                  },
                })}
                type="file"
                placeholder="specialty"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name?.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="add doctor"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
