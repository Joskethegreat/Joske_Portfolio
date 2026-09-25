import About from './components/About'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Awards />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
