
import './App.css';
import Pager from './components/organisms/Pager';
import AppHeading from './components/molecules/appHeading';
import React, { useState } from 'react';
import {useLocation} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, GoogleLogout } from '@react-oauth/google';


function App() {
  const [userName, setUserName] = useState('');
  const [bearer, setBearer] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const search = useLocation().search;
  const userToken = new URLSearchParams(search).get('userToken');

  const onLoginFailed = (data) =>{
    alert('login failed');
    
  }
  const onLoginSuccessful = (data) =>{
    alert('login succes');
  }
  const onLogout = (data) =>{
    alert('logout');
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

