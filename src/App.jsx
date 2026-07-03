import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyNerd from "./components/WhyNerd"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
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