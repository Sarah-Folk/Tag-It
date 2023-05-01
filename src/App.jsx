// import { useState } from 'react';
// import { MdClose } from 'react-icons/md';
// import { useAuth0 } from '@auth0/auth0-react';
// // // import reactLogo from './assets/react.svg';
// // // import viteLogo from '/vite.svg';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import Search from './Search';
// import Tags from './Tags.jsx';
// import './App.css';


// function App() {
//   const [count, setCount] = useState(0);
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading; please wait...</div>;
//   } else if (isAuthenticated) {
//     return (
//       <div className='App'>
//         <nav role='navigation'><LogoutButton /></nav>
//         <Search />
//         <Tags maxTagCount='50' />
//         <div>
//           <h2>{user.name}</h2>
//         </div>
//         <h1>Hello world!!</h1>
//       </div>
//     )
//   } else {
//     return (
//       <div className='App'>
//         <nav role='navigation'>
//           <LoginButton />
//         </nav>
//         <h1>Tag-it</h1>
//         <h2>Welcome to Tag-it - the tagging app you never knew you needed.</h2>
//         <p>Sign up or login to get started!</p>
//       </div>
//     )
//   }
// };

// export default App;




//       /* <div>
//         <a href='https://vitejs.dev' target='_blank'>
//           <img src={viteLogo} className='logo' alt='Vite logo' />
//         </a>
//         <a href='https://reactjs.org' target='_blank'>
//           <img src={reactLogo} className='logo react' alt='React logo' />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className='card'>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className='read-the-docs'>
//         Click on the Vite and React logos to learn more
//       </p> */







import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useAuth0 } from '@auth0/auth0-react';


import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Search from './Search';
import Tags from './Tags.jsx';
// import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Entries from './routes/Entries'
import Entry from './routes/Entry';
import './App.css';


import Home from "./compo/home";
import About from "./compo/about";
import Login from "./compo/login";
import "./styles.css";


const App = () => {
  return (
    <Router>
      <div className="container">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/entries' element={<Entries />} />
        <Route path='/entries/:id' element={<Entry />} />
      </Routes>
    </Router>
  );
};
export default App;