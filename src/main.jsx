import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FloatingNav } from './components/ui/floating-navbar.jsx'
import { navItems } from './constants/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FloatingNav navItems={navItems}/>
    <App />
  </StrictMode>,
)
