import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/bootstrap.css'

// import './index.css'
import App from './App.jsx'
// import "../../apple-responsive-replica-html-css-mar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
