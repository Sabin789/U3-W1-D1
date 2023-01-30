import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from "./logo.svg"
import Button from './button';
import ImageComponent from './img';
import Lists from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));

let alt="logo"
root.render(
 
  <>
    <App />
    <Button h1="Hi" cssClass="other"/>
    <ImageComponent src={logo} alt={alt} cssClass="red"/>
    <Lists />
  </>
);


