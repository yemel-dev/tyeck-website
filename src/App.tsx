import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import About from './components/sections/About'

function App() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      {/* Les prochaines sections viendront s'ajouter ici au fur et à mesure :
          <Testimonials />
          <Contact />
      */}
    </main>
  )
}

export default App