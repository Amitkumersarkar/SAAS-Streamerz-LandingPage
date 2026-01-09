import Footer from "./components/FooterSection/Footer"
import Hero from "./components/HeroSection/Hero"
import Navbar from "./components/Navbar/Navbar"
import HowItWorks from "./pages/HowItWorks"
import KeyFeatures from "./pages/KeyFeatures"
import PricingPlans from "./pages/PricingPlans"
import Testimonials from "./pages/Testimonials"

function App() {

  return (
    <>
      <main className="text-sm text-neutral-300 antialiased">
        <Navbar></Navbar>
        <Hero></Hero>
        <HowItWorks></HowItWorks>
        <KeyFeatures></KeyFeatures>
        <PricingPlans></PricingPlans>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
