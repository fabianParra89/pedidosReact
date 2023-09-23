import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';



const firebaseConfig = {
  apiKey: "AIzaSyCiwtc5uqINc7kLAboDwCzn3Va2eqPsIu4",
  authDomain: "coder-fbiparra.firebaseapp.com",
  projectId: "coder-fbiparra",
  storageBucket: "coder-fbiparra.appspot.com",
  messagingSenderId: "198446175414",
  appId: "1:198446175414:web:b13acf6a807d6418c70217"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
