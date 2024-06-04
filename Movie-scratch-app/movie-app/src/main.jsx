import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Movieprovider } from './Context/Movie.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <Movieprovider> 
    <App />
    </Movieprovider>

  </React.StrictMode>
)
