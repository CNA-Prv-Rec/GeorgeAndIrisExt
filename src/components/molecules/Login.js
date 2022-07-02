import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import PageButton from '../atoms/PageButton';



const clientId = "19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com";

const Login= (props) =>  {
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const onLoginSuccessful = props.onLoginSuccessful;

    const onSuccess = (res) => {
        console.log('current user: ', res);
        setIsLoggedIn(true);
        this.onLoginSuccessful(res);
    };

    const onFailure = (res) => {
        console.log('login failed',res);
        setIsLoggedIn(false);
        props.onLoginFailed(res);
    };

    const setFakeCreds = (res) => {
        var creds= prompt("Enter token");
        debugger;
        if (creds!="")
        {
            var data = {credentials:creds};
            props.onLoginSuccessful(data);
        }

        setIsLoggedIn(true);
    }

    return (
     
        <div className="googleLoginContainer">
            <GoogleLogin theme='outline' size= "large" shape="pill" width="200px"
                onSuccess={credentialResponse => {
                    debugger;
                    console.log(credentialResponse);
                    onLoginSuccessful(credentialResponse);
                }}
                onError={() => {
                    debugger;
                    console.log('Login Failed');
                    props.onLoginFailed();
                }}
            />
            
            <PageButton className="fake" Title="Add fake credentials" onclick={(window.location.href.indexOf("localhost:3000")>=0)?setFakeCreds:null} />
           

       
        </div>

    );
}

export default Login;

