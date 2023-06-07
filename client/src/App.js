import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import {useSelector} from "react-redux"
import Spinner from './components/spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
function App() {
  const {loading}=useSelector((state)=>state.alerts)
  return (
    <>
      <BrowserRouter>
      {loading ? (<Spinner/>):
      (
      <Routes>
      <Route path="/"
       element={
        <ProtectedRoute><HomePage /></ProtectedRoute>
       } />
      <Route path="/login" element={
        <PublicRoute><Login /></PublicRoute>
     } />
      <Route path="/register" element={
         <PublicRoute><Register /></PublicRoute>
      } />
    </Routes>
      )}
        
      </BrowserRouter>
    </>
  );
}

export default App;

