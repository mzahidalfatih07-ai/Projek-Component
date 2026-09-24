import { useState } from 'react'
import Header from './component/header'
import Content from './component/content'
import Footer from './component/footer'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#section">About Me</a>
        <a href="#Hobi">Hobi</a>
        <a href="#Kontak">Kontak</a>
      </nav>

      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App
