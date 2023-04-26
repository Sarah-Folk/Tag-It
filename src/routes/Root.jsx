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
// (<div>Hello world router-test2!

// </div>)
  const [count, setCount] = useState(0);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading; please wait...</div>;
  } else if (isAuthenticated) {
    return (
      <div className='App'>
        <nav role='navigation'><LogoutButton /></nav>
        <Search />
        <Tags maxTagCount='50' />
        <div>
          <h2>{user.name}</h2>
        </div>
        <h1>Hello world!!</h1>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <nav role='navigation'>
          <LoginButton />
        </nav>
        <h1>Tag-it</h1>
        <h2>Welcome to Tag-it - the app designed to meet all the tagging needs you didn't even know you had.</h2>
        <p>Sign up or login to get started!</p>
      </div>
    )
  }
};

export default Root;