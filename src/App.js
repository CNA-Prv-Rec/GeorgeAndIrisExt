
import './App.css';
import Pager from './components/organisms/Pager';
import AppHeading from './components/molecules/appHeading';
import React, { useState } from 'react';
import {useLocation} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import jwt from 'jwt-decode';
//var jwt2 = require("jsonwebtoken");
//import { GoogleLogin, GoogleLogout } from '@react-oauth/google';



function App() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const [bearer, setBearer] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const search = useLocation().search;
  const userToken = new URLSearchParams(search).get('userToken');
 // const { token } = req.body;

  const onLoginFailed = (data) =>{

    setBearer('');
    setIsLoggedIn(false);
    
  }

  /*const onLoginSuccessful = (data) => {
    try 
    {
      const result= await axios.post("/auth/", {
        token: data?.tokenId,
      });

      setUserName(result.data.user);
    } 
    catch (err) {
      console.log(err);
    }
  }
  */
  const onLoginSuccessful = (data) =>{
debugger;
    setBearer(data.credential);
    setIsLoggedIn(true);
    getGoogleUser(data);
  }

  const onLogout = (data) =>{

    setBearer('');
    setIsLoggedIn(false);
  }

  const getGoogleUser = (data) => {
    debugger;
    var user = jwt(data.credential);
    console.log(user);
    setEmail(user.email);
    setUserName(user.name);

    /*
    {
    "iss": "https://accounts.google.com",
    "nbf": 1656761693,
    "aud": "19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com",
    "sub": "102123291593046375339",
    "hd": "designwithwisdom.com",
    "email": "carolyn.anderson@designwithwisdom.com",
    "email_verified": true,
    "azp": "19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com",
    "name": "Carolyn Anderson",
    "picture": "https://lh3.googleusercontent.com/a/AATXAJx_-OjUHP5PEXcAFDt9aIxV57tVZOYaOYOfdSLA=s96-c",
    "given_name": "Carolyn",
    "family_name": "Anderson",
    "iat": 1656761993,
    "exp": 1656765593,
    "jti": "93ebfe3c1152327822a1664eda72ed567220e4aa"
}

    */

    /*var decode1 = jwt2.decode(token1);
   // console.log(decode1);
   */



    /*
    axios.post("https://oauth2.googleapis.com/auth/", { email, password })
    .then(res => {
      const token = res.data.token;
      const user = jwt(token); // decode your token here
      localStorage.setItem('token', token);
      dispatch(actions.authSuccess(token, user));
    })
    .catch(err => {
      dispatch(actions.loginUserFail());
  });
  */
/*
    axios.post("https://oauth2.googleapis.com/auth/", {
        token: data?.credential,
      }).then(response => {
        debugger;
      setUserName(response.name);
      setEmail(response.email);
     
    })
    .catch(function (error) {
      debugger;
        console.log(error);
    });
    */
  

  }


  return (
      <div className="App">
      
        <GoogleOAuthProvider clientId="19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com">
          <AppHeading Title="George & Iris's Crop Swap" onLoginFailed={onLoginFailed} onLoginSuccessful= {onLoginSuccessful} onLogout={onLogout} isLoggedIn={isLoggedIn} />

          <Pager userToken={userToken} />
        </GoogleOAuthProvider>
      
      </div>

  );
}

export default App;

