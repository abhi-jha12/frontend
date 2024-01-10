import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { PriceProvider } from "./PriceContext";
ReactDOM.render(
  <React.StrictMode>
    <PriceProvider>
    <App />
  </PriceProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
