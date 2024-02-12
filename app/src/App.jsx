import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Sidenav from './pages/Sidenav.jsx';
import Tasks from './pages/Tasks.jsx';
import Important from './pages/Important.jsx';
import MyDay from './pages/MyDay.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
 
  const [pending, setPending] = useState(JSON.parse(localStorage.getItem('PendingTaskList')) || []);
  const [completed, setCompleted] = useState(JSON.parse(localStorage.getItem('CompletedTaskList')) || []);

  useEffect(() => {
    localStorage.setItem('PendingTaskList', JSON.stringify(pending));
    }, [pending])

  useEffect(() => {
    localStorage.setItem('CompletedTaskList', JSON.stringify(completed))
    }, [completed])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidenav setPending={setPending} />}>
          <Route path="/" element={<Navigate to="/tasks" />}></Route>
          <Route path="tasks" element={<Tasks pending={pending} setPending={setPending} completed={completed} setCompleted={setCompleted} />} />
          <Route path="important" element={<Important pending={pending} setPending={setPending} completed={completed} setCompleted={setCompleted} />} />
          <Route path="myday" element={<MyDay pending={pending} setPending={setPending} completed={completed} setCompleted={setCompleted} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;