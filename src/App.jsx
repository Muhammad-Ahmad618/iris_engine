import React from 'react'
import './App.css'
import LandingPage from './Screens/LandingPage';
import SignIn from './Screens/SignIn';
import Register from './Screens/SignIn'
import Store from './Screens/Store';
import GameDetail from './Components/Interface/GameDetails_Interface'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/SignIn' element={<SignIn heading='Sign in to your Account'/>} />
        <Route path='/Register' element={<Register heading={`Create an Account`}/>} />
        <Route path='/Store' element={<Store/>} />
        <Route path='/Store/GameDetail' element={<GameDetail/>} />
      </Routes>
    </Router>
     
    </>
   
  );
}

export default App;
