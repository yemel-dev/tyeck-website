import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'

function App() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      {/* Les prochaines sections viendront s'ajouter ici au fur et à mesure :
          <Testimonials />
          <Contact />
      */}
    </main>
  )
}

export default App