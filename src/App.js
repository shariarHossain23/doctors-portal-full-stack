import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
import AddDoctor from './pages/Dashboard/AddDoctor';
import AllUser from './pages/Dashboard/AllUser';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageDoctor from './pages/Dashboard/ManageDoctor';
import MyAppoitment from './pages/Dashboard/MyAppoitment';
import MyHistory from './pages/Dashboard/MyHistory';
import Myreview from './pages/Dashboard/Myreview';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAdmin from './pages/Login/RequireAdmin';
import RequireAuth from './pages/Login/RequireAuth';
import Signup from './pages/Login/Signup';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className=''>
      <ToastContainer></ToastContainer>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/appointment'element={
        <RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>
      }></Route>
      <Route path='/dashboard'element={
        <RequireAuth>
         <Dashboard></Dashboard>
        </RequireAuth>
      
      }
      >
        <Route index element={<MyAppoitment></MyAppoitment>}></Route>
        <Route path='review' element={<Myreview></Myreview>}></Route>
        <Route path='myhistory' element={<MyHistory></MyHistory>}></Route>
        <Route path='alluser' element={<RequireAdmin>
          <AllUser></AllUser>
        </RequireAdmin>}></Route>
        <Route path='add-doctor' element={<AddDoctor></AddDoctor>}></Route>
        <Route path='manage-doctor' element={<ManageDoctor></ManageDoctor>}></Route>
      </Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup'element={<Signup></Signup>}></Route>
    </Routes>
    </div>
  );
}

export default App;
