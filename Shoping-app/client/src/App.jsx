import React from "react";
import Userlayout from "./Pages/Userlayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Userlayout />} >
          
          <Route path="/cart" element={<h1>Cart Page</h1>} />
          <Route index element={<Home/>}/>
          <Route path="/orders" element={<h1>Orders Page</h1>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
          <Route path="/logout" element={<h1>Logout Page</h1>} />
              </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;