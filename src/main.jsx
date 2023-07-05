import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FormProvider from './context/FormContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // ! this is the provider wrapper that is coming from context/FormContext.jsx
  <FormProvider>


  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </FormProvider>
)
