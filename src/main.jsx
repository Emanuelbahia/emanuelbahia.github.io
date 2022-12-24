import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from "./app/store"
import App from './App'

//el provider anida todo el componente app que es el que recibe toda la aplicacion. 
//Tambien recibe una props que se llama store, que va a recibir el store (appStore) que cree en src/app/store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ appStore } >
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
