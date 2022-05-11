import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Signup from './pages/Login/Signup';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/appointment'element={
        <RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>
      }></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup'element={<Signup></Signup>}></Route>
    </Routes>
    </div>
  );
}

export default App;
