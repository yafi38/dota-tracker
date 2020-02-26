import React, { useState, useContext } from 'react';
import axios from 'axios';

import AuthContext from '../components/AuthContext';
import Form from '../components/Form';
import './Login.css';


function Login() {
   const auth = useContext(AuthContext);
   async function onSubmitHandler(id) {
      localStorage.setItem('id', id);
      try {
         const response = await axios.get(`https://api.opendota.com/api/players/${id}`);
         if (response.data.profile) {
            console.log(response);
            auth.login();
         }
         else console.log("could not find user");
      } catch (error) {
         console.log(error);
      }
      //console.log(localStorage.getItem('id'));
   }

   return (
      <div className="page-body">
         <img src="https://www.pinclipart.com/picdir/big/352-3520682_dota-2-logo-png-clipart.png"
            alt="dota-logo" />
         <h1>Welcome to DOTA 2 Tracker</h1>

         <Form onSubmit={onSubmitHandler} />
      </div>
   );
}


export default Login;