import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// añadir boton para limpiar pedidos, sacar el cliente, comportamiento null en valores