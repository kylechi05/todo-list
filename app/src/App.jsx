import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Sidenav from './pages/Sidenav.jsx';
import Tasks from './pages/Tasks.jsx';
import Important from './pages/Important.jsx';
import MyDay from './pages/MyDay.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {

  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidenav />}>
          <Route path="/" element={<Navigate to="/tasks" />}></Route>
          <Route path="tasks" element={<Tasks pending={pending} setPending={setPending} completed={completed} setCompleted={setCompleted} />} />
          <Route path="important" element={<Important pending={pending} setPending={setPending} completed={completed} setCompleted={setCompleted} />} />
          <Route path="myday" element={<MyDay pending={pending} setPending={setPending} completed={completed} setCompleted={setCompleted} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;