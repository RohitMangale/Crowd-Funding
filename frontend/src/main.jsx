import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <ScrollToTop/>
      <AuthContextProvider>
        <ToastContainer theme='dark' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
