import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero1 from './components/hero1'
import Hero2 from './components/hero2'
import Hero3 from './components/hero3'
import BrandBand from './components/brandBand'
import {heros} from './styles/style.css';
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className={heros}>
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <BrandBand />
        <Footer />
      </div>
    </div>
  )
}

export default App
