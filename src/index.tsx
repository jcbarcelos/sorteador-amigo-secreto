import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RecoilRoot } from 'recoil'
import Cabecalho from './components/Cabecalho/Cabecalho'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Cabecalho />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
