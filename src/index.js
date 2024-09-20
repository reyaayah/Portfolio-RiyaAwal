import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Resume from './pages/resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="resume" element={<Resume/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
