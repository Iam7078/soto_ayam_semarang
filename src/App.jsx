import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Location from "./components/Location"
import Menu from "./components/Menu"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Location />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default App
