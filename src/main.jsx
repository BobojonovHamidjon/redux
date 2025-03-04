import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './Store/Store.jsx'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={Store}>
<RouterProvider  router={Router}/>
   </Provider>
  </StrictMode>,
)
