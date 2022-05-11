import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/appointment'element={<Appoinment></Appoinment>}></Route>
    </Routes>
    </div>
  );
}

export default App;
