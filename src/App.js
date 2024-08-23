import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './AppComponents/Home';
import About from './AppComponents/About';
import Contact from './AppComponents/Contact';
import Navbar from './AppComponents/Navbar';
import { SignIn, useUser } from '@clerk/clerk-react';

const App = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  
  useEffect(() => {
    console.log("issignedIn", isSignedIn);
    console.log("user", user);
    console.log("isloaded", isLoaded);
  })

  if (!isLoaded) {
    return null;
  }


  if (!isSignedIn) {
    return <div className='flex justify-center items-center w-screen h-screen bg-slate-100'>
      <SignIn fallbackRedirectUrl='/' forceRedirectUrl='/'/>
    </div>
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App