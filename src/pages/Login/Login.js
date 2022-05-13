import React, { useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const [email,setEmail] = useState('')
  const [users, loadings, userError] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, Ferror] =
    useSendPasswordResetEmail(auth);
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
  if (gLoading || loading) {
    return <Loading></Loading>;
  }

  if (gError || error || Ferror) {
    signError = (
      <p className="text-red-500 mb-2">{gError?.message || error?.message}</p>
    );
  }
  //   google sign in
  const googleSignIn = () => {
    signInWithGoogle();
  };

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  // forger password
  const handleForgetPass = async (event) => {
    
   if(email){
    await sendPasswordResetEmail(email);
    toast.success('Sent email');
}
  
  };
  return (
    <div className="flex h-screen justify-center items-center mt-6">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                name="email"
                onChange={(e)=>setEmail(e.target.value) }
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
            <button
              onClick={handleForgetPass}
              className="btn btn-link text-accent"
            >
              Forgot Password ?
            </button>
            {signError}
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="login"
            />
          </form>
          <p>
            New to Doctors Portal?
            <Link to="/signup" className="text-secondary">
              Create new account
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

export default Login;
