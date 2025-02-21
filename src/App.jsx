import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/authContext";
import Home from "./pages/home/home";
import Navbar from "./component/navbar/navbar";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ProtectedRoute from "./component/ProtectedRoute";
import { AuthProvider } from "./context/authContext";

import './App.css'
import Dashboard from './pages/dashboard/dashboard';
import Sidebar from './component/sidebar/sidebar';
import Categories from "./pages/dashboard/categories";
import Posts from "./pages/dashboard/posts";
import Users from "./pages/dashboard/users";
function App() {

  return (
    <AuthProvider>
      <Router>
      <Navbar />
      <Sidebar />
        <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } /> 
     
        <Route path="/dashboard/categories" element={ <ProtectedRoute> <Categories/> </ProtectedRoute> } />
        <Route path="/dashboard/posts" element={  <ProtectedRoute>  <Posts/> </ProtectedRoute> } />
        <Route path="/dashboard/users" element={ <ProtectedRoute>   <Users/> </ProtectedRoute>} />

        </Routes>
      </Router>
  
      </AuthProvider>

  
  );
}

export default App
