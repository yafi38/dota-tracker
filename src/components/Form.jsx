import React, { useState } from 'react';
import { StylesProvider, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import './Form.css';

const useStyles = makeStyles (theme => ({
   myBtn: {
      backgroundColor: "#B90506"
   }
}));

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

   const classes = useStyles();

   return (
      <StylesProvider injectFirst>
         <form className='my-form' onSubmit={clickHandler} >
            <TextField classes={{ root: 'my-text' }} id="standard-basic" label="User ID" onChange={changeHandler} placeholder="Enter DOTA 2 user id"
               value={id} autoComplete="off" />
            <br />
            <Button
               className={classes.myBtn}
               color="primary"
               variant="contained"
               type="submit" disableElevation >
               Submit
         </Button>
         </form>
      </StylesProvider>
   );
}


export default Form;