import React from 'react';
import './App.css';

// libraries
import { Route } from 'react-router-dom'

// components
import Navbar from './components/navbar.jsx'
import Main from './pages/main.jsx'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Navbar} />
      
      <Route path='/' component={Main} />
    </div>
  );
}

export default App;
