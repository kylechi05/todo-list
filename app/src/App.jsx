import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './pages/Sidenav.jsx';
import ListDisplay from './pages/ListDisplay.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidenav />}>
          <Route index element={<ListDisplay />} />
          <Route path="important" element={<Important />} />
          <Route path="myday" element={<MyDay />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;