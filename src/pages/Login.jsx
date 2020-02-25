import React, { useState } from 'react';
import { StylesProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import './Login.css';


function Login() {
   const [id, setId] = useState("");

   function handleChange(event) {
      //console.log(event.target.value);
      setId(event.target.value);
   }

   function handleClick(event) {
      event.preventDefault();
      console.log(id);
   }

   return (
      <StylesProvider injectFirst>
         <div>
            <h1>Welcome to DOTA 2 Tracker</h1>

            <form className='my-form' onSubmit={handleClick} >
               {/* <input
               onChange={handleChange}
               type="text"
               placeholder="Enter DOTA 2 user id"
               value={id}
            /> */}
               <TextField classes={{ root: 'my-text' }} id="standard-basic" label="User ID" onChange={handleChange} placeholder="Enter DOTA 2 user id"
                  value={id} autoComplete="off" />
               <br/>
               <Button
                  classes={{ root: 'my-btn' }}
                  size="small" variant="contained" color="primary"
                  type="submit" disableElevation >
                  Submit
               </Button>
            </form>
         </div>
      </StylesProvider>
   );
}


export default Login;