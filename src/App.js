import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './components/Dashbord/Services';
import Techniciens from './components/Dashbord/techniciens';
import HomeDashBord from './components/Dashbord/HomeDashBord';
import Home from './components/Pages/Home';
import Assistance from './components/Pages/Assistance';
import Navbar from './components/Navbar';
import Login from './components/Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<HomeDashBord />} />
          <Route path='/admin/techniciens' element={<Techniciens />} />
          <Route path='/admin/services' element={<Services />} />
          <Route path='/assistance' element={<Assistance />} /> 
          <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
