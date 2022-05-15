
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';

function RequireAdmin({ children }) {

    const [user, loading, error] = useAuthState(auth);
    const [admin,isLoading] = useAdmin(user)
    let location = useLocation();
    
    if(loading || isLoading){
        return <Loading></Loading>
    }
    if (!user || !admin) {
     
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
export default RequireAdmin;