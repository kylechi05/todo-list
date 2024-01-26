import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Sidenav from './pages/Sidenav.jsx';
import ListDisplay from './pages/ListDisplay.jsx';
import Important from './pages/Important.jsx';
import MyDay from './pages/MyDay.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidenav />}>
          <Route path="/" element={<Navigate to="/tasklist" />}></Route>
          <Route path="tasklist" element={<ListDisplay />} />
          <Route path="important" element={<Important />} />
          <Route path="myday" element={<MyDay />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;