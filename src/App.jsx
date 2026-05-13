import Nav from './components/Nav'
import Hero from './components/Hero'
import ProofStrip from './components/ProofStrip'
import Modules from './components/Modules'
import ForWho from './components/ForWho'
import About from './components/About'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <header role="banner">
        <Nav />
      </header>
      <main>
        <Hero />
        <div className="container mx-auto px-5 max-w-[1100px]">
          <ProofStrip />
        </div>
        <Modules />
        <ForWho />
        <About />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
