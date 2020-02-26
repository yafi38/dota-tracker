import React, { useState } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import './Form.css';

function Form(props) {
   const [id, setId] = useState("");

   function changeHandler(event) {
      //console.log(event.target.value);
      setId(event.target.value);
   }

   function clickHandler(event) {
      event.preventDefault();
      props.onSubmit(id);
   }
   return (
      <StylesProvider injectFirst>
         <form className='my-form' onSubmit={clickHandler} >
            <TextField classes={{ root: 'my-text' }} id="standard-basic" label="User ID" onChange={changeHandler} placeholder="Enter DOTA 2 user id"
               value={id} autoComplete="off" />
            <br />
            <Button
               classes={{ root: 'my-btn' }}
               size="small" variant="contained" color="primary"
               type="submit" disableElevation >
               Submit
         </Button>
         </form>
      </StylesProvider>
   );
}


export default Form;