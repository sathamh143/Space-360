import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import PageContent from './Components/PageContent';

ReactDOM.render(
  <BrowserRouter>
    <App  />
    <PageContent/>
  </BrowserRouter>,
  document.getElementById("root")
);
