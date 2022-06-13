import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Privacy from './components/pages/Privacy';
import TermsOfService from './components/pages/TandC';



const rootElement = document.getElementById('root');
//const rootElement = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
    <Routes>
              <Route exact path="/" element={ <App />}/>
              <Route exact path="/privacy" element={<Privacy />}/>
              <Route exact path="/termsofservice" element={<TermsOfService />}/>
      </Routes>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
