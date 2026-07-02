import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyNerd from "./components/WhyNerd"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </>
  )
}

export default App