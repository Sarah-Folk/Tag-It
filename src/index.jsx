import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-d65ug44s1wn7ivu3.us.auth0.com"
    clientId="R1WTVmO04jtltBfgCh4xD9K9W10XQ1xX"
    authorizationParams={{
      redirect_uri: 'http://127.0.0.1:3000/'
    }}
  >
    <App />
  </Auth0Provider>
)
