import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import NewsCard from './components/NewsCard.jsx'
import NewsList from './components/NewsList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <App />
  </StrictMode>,
)
