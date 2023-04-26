import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Entries from './routes/Entries'
import Entry from './routes/Entry';
import { Auth0Provider } from'@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element:
    <Auth0Provider
      domain="dev-d65ug44s1wn7ivu3.us.auth0.com"
      clientId="R1WTVmO04jtltBfgCh4xD9K9W10XQ1xX"
      authorizationParams={{
        redirect_uri: 'http://127.0.0.1:8080/'
      }}
    >
      <Root />
    </Auth0Provider>,
    errorElement: <ErrorPage />
  },
  {
    path: 'entries',
    element: <Entries />
  },
  {
    path: 'entries/:entry_id',
    element: <Entry />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

  // <Auth0Provider
  //   domain="dev-d65ug44s1wn7ivu3.us.auth0.com"
  //   clientId="R1WTVmO04jtltBfgCh4xD9K9W10XQ1xX"
  //   authorizationParams={{
  //     redirect_uri: 'http://127.0.0.1:8080/'
  //   }}
  // >
  //   <App />
  // </Auth0Provider>