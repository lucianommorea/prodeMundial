import React from 'react';
import ReactDOMClient from "react-dom/client"
// import './index.css';
import App from './App';
import Auth0ProviderWithHistory from '../src/components/Auth0/auth0-provider-with-history'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

const container = document.getElementById("root")
const root = ReactDOMClient.createRoot(container);

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


root.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0ProviderWithHistory>
  </BrowserRouter>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


