// ProtectedRoute.js
import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from './Authentication';




const ProtectedRoute = ({ element }) => {

  // const [activeUser, setActiveUser] = useState(null);



  // const nav = useNavigate()
  // useEffect(() => {
  //   const isUser = onAuthStateChanged(Auth, (user) => {
  //     if (user?.uid) {
  //       setActiveUser(user)
  //     } else {
  //       nav('/')
  //     }
  //   })

  //   return () => isUser()
  // }, [])


  // return element;
  


  //disable the proction route for now
};

export default ProtectedRoute;
