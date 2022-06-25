import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';



const clientId = "19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com";

const Login= (props) =>  {
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

    const onSuccess = (res) => {
        console.log('current user: ', res);
        setIsLoggedIn(true);
        props.onLoginSuccessful(res);
    };

    const onFailure = (res) => {
        console.log('login failed',res);
        setIsLoggedIn(false);
        props.onLoginFailed(res);
    };

    return (
        <div className="googleLoginContainer">
            <GoogleLogin theme='outline' size= "large" shape="pill" width="200px"
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />

       
        </div>

    );
}

export default Login;

