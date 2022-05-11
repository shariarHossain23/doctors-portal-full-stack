import React from "react";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Signup = () => {
    const [users, loadings, userError] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (users) {
    navigate(from, { replace: true });
  }

  let signError;
  //   loading
  if (gLoading || loading || updating) {
    return <Loading></Loading>;
  }

  if (gError || error || updateError) {
    signError = (
      <p className="text-red-500 mb-2">{gError?.message || error?.message}</p>
    );
  }
  //   google sign in
  const googleSignIn = () => {
    signInWithGoogle();
  };

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email,data.password)
    await updateProfile({ displayName:data.name });
    
    
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password required",
                  },
                  minLength: {
                    value: 6,
                    message: "password must be 6 character",
                  },
                })}
                type="password"
                placeholder=" your password"
               className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signError}
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="sign up"
            />
          </form>
          <p>
            You have already account?
            <Link to="/login" className="text-secondary">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={googleSignIn} className="btn btn-outline">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
