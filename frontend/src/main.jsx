import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LoadingProvider } from './loadingcontext.jsx'
import {Provider } from "react-redux"
import { store } from './Redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <LoadingProvider>
       <App />
       </LoadingProvider>
    </Provider>
    
   
  </StrictMode>,
)
