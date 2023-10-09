import { useState } from 'react'
import soltakLogo from './assets/logosoltak.svg'
import './App.css'
import Range from './components/Range.jsx';

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={soltakLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Solcelle Kalkulator</h1>
      <div className="card">
        <Range/>
      </div>
    </>
  )
}

export default App
