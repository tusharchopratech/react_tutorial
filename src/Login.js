import { useState } from "react";
import * as React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { autheticateUser } from './rest/AuthAPI';
import Snackbar from '@mui/material/Snackbar';


export default function Login() {


  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponseText, setApiResponseText] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const authenticateUser = async () => {
    try {
      let response = await autheticateUser(userId, password);
      if (response.status === 200){
        setApiResponseText("Login Success");
        console.log("Login Success");
        console.log(response);
        toggleSnackbar();
        return;  
      }
    } catch (err) {
      console.log(err);
    }
    setApiResponseText("Login Failed!");
    console.log("Login Failed!");
  }

  const toggleSnackbar = () => {
    setOpenSnackBar(!openSnackBar);
  }

  const handleUserId = (event) => {
    console.log("UserId - " + event.target.value);
    setUserId(event.target.value);
  }

  const mainContainerCss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100vh'
  };

  const childCss = {
    margin: '5px', display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const formCss = {
    flex: '0.2',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={mainContainerCss}>
      <div style={formCss}>
        <div style={childCss}>
          <a href={"https://dummyjson.com/docs/auth"}>APIs Documentation</a>
        </div>
        <div style={childCss}>
          <TextField label="UserId" value={userId} onChange={event => handleUserId(event)} required fullWidth />
        </div>
        <div style={childCss}>
          <TextField label="Password" value={password} onChange={e => setPassword(e.target.value)} required fullWidth />
        </div>
        <div style={childCss}>
          <Button variant="contained" onClick={authenticateUser} fullWidth >
            Sign In
          </Button>
        </div>
      </div>

      <Snackbar open={openSnackBar} autoHideDuration={3000} message={apiResponseText} onClick={toggleSnackbar} />
    </div>
  );
}
