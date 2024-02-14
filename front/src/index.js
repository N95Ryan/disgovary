import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Actions from './Pages/Actions/Actions';
import Docs from './Pages/Docs/Docs';
import About from './Pages/About/About';
import Sandbox from './Pages/Sandbox/Sandbox';
import CreateUser from './Pages/Actions/CreateUser';
import ReadUser from './Pages/Actions/ReadUser';
import UpdateUser from './Pages/Actions/UpdateUser';
import DeleteUser from './Pages/Actions/DeleteUser';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/actions" element={<Actions />} /> 
        <Route path="/docs" element={<Docs />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/about" element={<About />} />   
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="readuser" element={<ReadUser />} />
        <Route path="updateuser" element={<UpdateUser />} />
        <Route path="deleteuser" element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
