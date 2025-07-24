import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './globals.css';

const App = () => {
  return (
    <main className="flex-h-screen">
        <Routes>
        {/* public routes (the basics) :0 */}
        <Route path="/sign-in" element={<SigninForm/>} /> 

        {/* private routes (elite only yasss) ;) */}
        <Route index element={<Home/>} />
        </Routes>
    </main>

  )
}

export default App  