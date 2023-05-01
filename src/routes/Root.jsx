import React from 'react';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useAuth0 } from '@auth0/auth0-react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Search from '../Search';
import Tags from '../Tags.jsx';
import '../App.css';




const Root = () => {
  const [count, setCount] = useState(0);
  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return <div>Loading; please wait...</div>;
  } else if (isAuthenticated) {
    return (
      <div className='App'>
        <nav role='navigation'>
          <div className='nav-text'>

          <h2>Tag-it</h2>
          <h2>{user.name}</h2>
          </div>
          <LogoutButton />
        </nav>
        <Search />
        <div>

        </div>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <nav role='navigation'>
          <LoginButton />
        </nav>
        <h1>Tag-it</h1>
        <h2>Welcome to Tag-it - the tagging app you never knew you needed.</h2>
        <p>Sign up or login to get started!</p>
      </div>
    )
  }
};

export default Root;