import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import {gapi} from 'gapi-script'

function Login() {
  
    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID!,
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);

      
  const onSuccess = (response: any) => {
    console.log('SUCCESS', response);
    //Make request to the server to log in
  };
  const onFailure = (response: any) => {
    console.log('FAILED', response);
  }


    return (
        
           
    <GoogleLogin clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}
    buttonText="Log in with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    />  
  
  )
}

export default Login