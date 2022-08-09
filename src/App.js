
import './App.css';
import Pager from './components/organisms/Pager';
import AppHeading from './components/molecules/appHeading';
import React, { useState } from 'react';
import {useLocation} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import jwt from 'jwt-decode';
//import { unstable_renderSubtreeIntoContainer } from 'react-dom';
//var jwt2 = require("jsonwebtoken");
//import { GoogleLogin, GoogleLogout } from '@react-oauth/google';

export const UserContext = React.createContext();

function App() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userDBID, setUserDBID] =useState('');

  //const [bearer, setBearer] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState('');

  const search = useLocation().search;
  //const userToken = new URLSearchParams(search).get('userToken');
 // const { token } = req.body;

  const onLoginFailed = (data) =>{

    setIsLoggedIn(false);
    setUserDBID("");
    setUserToken("");
    
  }
  
  const onLoginSuccessful = (data) =>{

    setUserToken(data.credential);
    setIsLoggedIn(true);
    getGoogleUser(data);
   // getDBUser(data);
  }

  const onLogout = (data) =>{

    setUserToken('');
    setIsLoggedIn(false);
  }

  const getDBUser = (data, user, cred) =>{
          
        var tokenNew = "[Basic " + cred + "]";
      
        axios.post('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/GIUserAuth2',
          {token: cred},
          {
        headers: {
          'Accept': ['application/json']
        }
        })
        .then((res) => {
          var data = res.data
          console.log(res.data);
          var id = '';
          try{
            id = (data.length === 1)?data.insertedId:data._id;
          }
          catch(e)
          {
              id="";
          }
          setUserDBID(id);
          if (id.length>0)
          {
          setIsLoggedIn(true);
          }
          else
          {
            setIsLoggedIn(false);
          }
          
      
        })
        .catch((error) => {
        console.error(error);
        });

        
      /*
          axios.post('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/GIUserAuth',
          {
            trial: data   
          },
          {
        headers: {
          'Authorization': tokenNew,
          'Authorization': `Basic ${data}`,
          'Accept': ['application/json']
        
        }
      })
      .then((res) => {
        debugger;
        console.log(res.data);
      })
      .catch((error) => {
        debugger;
        console.error(error);
          axios.post('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpointGIUserAuth2',
          {user: user},
          {
        headers: {
          'Authorization': data,
          'Accept': ['application/json']
        
        }
        })
        .then((res) => {
        debugger;
        console.log(res.data);
        })
        .catch((error) => {
        debugger;
        console.error(error);
        })
      })
      */

  }


  const getGoogleUser = (data) => {
    
    var user = jwt(data.credential);
    console.log(user);
    setEmail(user.email);
    setUserName(user.name);
    getDBUser(data, user, data.credential);

   


  }


  return (
      <div className="App">
      
        <GoogleOAuthProvider clientId="19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com">
          
          <AppHeading Title="George & Iris's Crop Swap" onLoginFailed={onLoginFailed} onLoginSuccessful= {onLoginSuccessful} onLogout={onLogout} isLoggedIn={isLoggedIn} />
          <Pager userToken={userToken} userDBID={userDBID} email={email} userName={userName} isLoggedIn={isLoggedIn} />
         
        </GoogleOAuthProvider>
      
      </div>

  );
}

export default App;

