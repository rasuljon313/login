import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/main.scss"
import App from './router/App.jsx'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster/> 
    </BrowserRouter>
  </StrictMode>,
)
