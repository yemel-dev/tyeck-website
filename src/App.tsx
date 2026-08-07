import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

function App() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      {/* Prochaine section à ajouter :
          <Testimonials />
      */}
    </main>
  )
}

export default App