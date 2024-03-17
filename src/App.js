import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import ProtectedPaymentRoute from './pages/ProtectedPaymentRoute';
import ProtectedLoginRoute from './pages/ProtectedLoginRoute';
import ProtectedSignupRoute from './pages/ProtectedSignupRoute';
import ReactGA from 'react-ga';
import Reallotment from './pages/Reallotment';

const MEASUREMENT_ID = 'G-RDCNBDLCL4';
ReactGA.initialize(MEASUREMENT_ID);

const App = () => {

  const [openNav, setOpenNav] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Free");

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
          <Route path={'/getallotrix/download/payment'} element={<ProtectedPaymentRoute initialSelectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />} />
          <Route path={'/getallotrix/download/payment'} element={<Payment initialSelectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<ProtectedLoginRoute />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<ProtectedSignupRoute />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/termsofservice' element={<Terms />} />
          <Route path='/privacypolicy' element={<Privacy />} />
          <Route path='/refundpolicy' element={<Refund />} />
          <Route path='/reallotment' element={<Reallotment />} />
        </Routes>
        <Footer />
      </AuthState>
    </Router>
  )
}

export default App;
