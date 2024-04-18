import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './components/Dashbord/GestionAssistance';
import Techniciens from './components/Dashbord/techniciens';
import HomeDashBord from './components/Dashbord/HomeDashBord';
import Home from './components/Pages/Home';
import Assistance from './components/Pages/Assistance';
import Navbar from './components/Navbar';
import Login from './components/Pages/Login';
import GestionAssistance from './components/Dashbord/GestionAssistance';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
          <Route path='/' element={<Login/>} />
          {/* <Route path='/admin' element={<HomeDashBord />} /> */}
          <Route path='/admin/techniciens' element={<Techniciens />} />
          <Route path='/admin/gestion-assistance' element={<GestionAssistance />} />
          <Route path='/assistance' element={<Assistance />} /> 
          <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
