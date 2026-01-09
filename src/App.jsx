import Hero from "./components/HeroSection/Hero"
import Navbar from "./components/Navbar/Navbar"
import HowItWorks from "./pages/HowItWorks"
import KeyFeatures from "./pages/KeyFeatures"

function App() {

  return (
    <>
      <main className="text-sm text-neutral-300 antialiased">
        <Navbar></Navbar>
        <Hero></Hero>
        <HowItWorks></HowItWorks>
        <KeyFeatures></KeyFeatures>
      </main>
    </>
  )
}

export default App
