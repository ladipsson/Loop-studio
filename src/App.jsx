import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero/hero'
import Main from './Components/Main/main'
import Card from './Components/Cards/cards'
import Footer from './Components/Footer/footer'
const App = () => {
  return (
    <Router>
      <Hero/>
      <Main/>
      <Card/>
      <Footer/>
    </Router>
  )
}

export default App
