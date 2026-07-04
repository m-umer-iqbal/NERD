import React, { useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyNerd from "./components/WhyNerd"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <main>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <WhyNerd />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}

export default App