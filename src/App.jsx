import Hero from "./components/HeroSection/Hero"
import Navbar from "./components/Navbar/Navbar"
import HowItWorks from "./pages/HowItWorks"

function App() {

  return (
    <>
      <main className="text-sm text-neutral-300 antialiased">
        <Navbar></Navbar>
        <Hero></Hero>
        <HowItWorks></HowItWorks>
      </main>
    </>
  )
}

export default App
