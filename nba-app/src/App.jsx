import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';
import Showcase from './components/Showcase.jsx'

function App() {
  return (
    <>
      <Header/>
      <Showcase/>
    </>
  );
}

export default App;