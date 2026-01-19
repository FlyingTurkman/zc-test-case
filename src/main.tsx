import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import MobileInformationBar from '../components/layout/MobileInformationBar.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <head>
      <meta name='description' content='ZC-Test-Case'/>
      <title>ZC Test Case</title>
    </head>
    <MobileInformationBar/>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>
)
