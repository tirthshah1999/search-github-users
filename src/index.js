import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-jds83me3.us.auth0.com
// MWPn0eDZGhkUtz8dXltPs9bIuZ6Zikrl

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain= {process.env.REACT_APP_DOMAIN}
      clientId= {process.env.REACT_APP_CLIENT_ID}
      redirectUri= {window.location.origin}
      // If you login with social account, and then you go to wrong page, when you click back to home you will be redirected to login page so to prevent that we have to store social login in localStorage (Note:- This will not happen while simple login)
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
