import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './front/Pages/Homepage/Homepage'
import ActionsDB from './front/Pages/ActionsDB/ActionsDB';
import Sandbox from './front/Pages/Sandbox/Sandbox';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/actionsdb" element={<ActionsDB />} /> 
        <Route path="/sandbox" element={<Sandbox />} />     
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
