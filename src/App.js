import React, { useContext, useState } from 'react';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Faqs from './pages/Faqs';
import Download from './pages/Download';
import OtherProducts from './pages/OtherProducts';
import GetAllotrix from './pages/GetAllotrix';
import Updates from './pages/Updates';
import Team from './pages/Team';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthState from './contexts/AuthContext';

const App = () => {

  const [openNav, setOpenNav] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <Router>
      <AuthState>
        <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Routes>
          <Route path='/' element={<Home setSelectedPlan={setSelectedPlan} />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/getallotrix' element={<GetAllotrix />} />
          <Route path='/getallotrix/download' element={<Download />} />
          <Route path='/getallotrix/otherProducts' element={<OtherProducts />} />
          <Route path='/updates' element={<Updates />} />
          <Route path='/team' element={<Team />} />
          <Route path={'/getallotrix/download/payment'} element={<Payment initialSelectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </AuthState>
    </Router>
  )
}

export default App;
