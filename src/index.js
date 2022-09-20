import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import Cont1 from './Cont1';
import Cont2 from './Cont2';
import Cont3 from './Cont3';
import Cont4 from './Cont4';
import Cont5 from './Cont5';
import Cont6 from './Cont6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Cont1 />
    <Cont2 />
    <Cont3 />
    <Cont4 />
    <Cont5 />
    <Cont6 />
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
