import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PriceProvider } from "./PriceContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PriceProvider>
    <App />
  </PriceProvider>
  </React.StrictMode>,
)
