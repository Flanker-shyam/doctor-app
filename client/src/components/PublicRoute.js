import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({children}) {
 if(localStorage.getItem("token")){
    console.log("navigating to home route from public route")
    return <Navigate to="/" />
 }
 else{
    return children;
 }
}
 
