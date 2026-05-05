import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Formations from '../components/landing/Formations'
import Avantages from '../components/landing/Avantages'
import Temoignages from '../components/landing/Temoignages'
import Footer from '../components/landing/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Formations />
      <Avantages />
      <Temoignages />
      <Footer />
    </div>
  )
}