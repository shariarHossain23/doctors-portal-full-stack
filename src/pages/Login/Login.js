import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if(gUser){
        console.log(gUser);
    }
    const googleSignIn = () => {
        signInWithGoogle()
    }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <div className="divider">OR</div>
          <button onClick={googleSignIn} className="btn btn-outline">Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
