import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav.jsx';
import ListDisplay from './components/ListDisplay.jsx';

function App() {
  return (
    <>
      <div className='h-screen flex flex-col'>
        <div className='flex grow'>
          <Sidenav />
          <ListDisplay />
        </div>
      </div>
    </>
  ) 
}

export default App;