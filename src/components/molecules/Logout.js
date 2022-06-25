import React, { useState } from 'react';
//import { googleLogout } from '@react-oauth/google';



const clientId = "19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com";

const Logout= (props) =>  {
    const onSuccess = (res) => {
        alert('logged out');
        props.onLogout(res);
    };

   
    return (
        
        <div>
            <googleLogout
             clientId = {clientId}
             buttonText="Logout"
             onLogoutSuccess = {onSuccess}
             />
        </div>

    );
}

export default Logout;

