import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyD_SZIK39SX4VA35YtS_jLAl57IUDCslS4",
    authDomain: "react-chat-b1437.firebaseapp.com",
    projectId: "react-chat-b1437",
    storageBucket: "react-chat-b1437.appspot.com",
    messagingSenderId: "663929570612",
    appId: "1:663929570612:web:1253acdb228c82b4329161",
    measurementId: "G-RDKG1EYQ7Q"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const Context=createContext(null);
const auth=firebase.auth();
const firestore=firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{firestore,auth,firebase}}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

