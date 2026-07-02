import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </>
  )
}

export default App