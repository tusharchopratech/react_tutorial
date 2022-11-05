import { useState,useEffect } from "react";
import * as React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { autheticateUser } from '../rest/AuthAPI';
import Snackbar from '@mui/material/Snackbar';
import AuthService from "../settings/AuthUtils";
import { useNavigate } from "react-router-dom";
const auth = new AuthService();

export default function Login() {

  let navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponseText, setApiResponseText] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);
  

  const authenticateUser = async () => {
    try {
      let response = await autheticateUser(userId, password);
      if (response.status === 200){
        setApiResponseText("Login Success");   
        auth.setApiKey(response.data.token);
        auth.setUserRole(['admin']);
        auth.setUserPermissions(['read_user']);
        navigate("/home");
        toggleSnackbar(true);
        return;  
      }
    } catch (err) {
      console.log(err);
    }
    setApiResponseText("Login Failed!");
    console.log("Login Failed!");
    auth.logout();
    toggleSnackbar(true);
  }

  const toggleSnackbar = (status) => {
    setOpenSnackBar(status);
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
          <TextField label="UserId" value={userId} onChange={event => handleUserId(event)} required fullWidth data-testid="username"/>
        </div>
        <div style={childCss}>
          <TextField label="Password" value={password} onChange={e => setPassword(e.target.value)} required fullWidth  data-testid="password"/>
        </div>
        <div style={childCss}>
          <Button variant="contained" onClick={authenticateUser} fullWidth  data-testid="sign-in-button">
            Sign In
          </Button>
        </div>
      </div>

      <Snackbar open={openSnackBar} autoHideDuration={3000} message={apiResponseText} onClick={e => toggleSnackbar(false)} />
    </div>
  );
}
