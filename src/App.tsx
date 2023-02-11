import { useState, useRef } from 'react'
import Hero1 from './components/hero1'
import Hero2 from './components/hero2'
import Hero3 from './components/hero3'
import BrandBand from './components/brandBand'
import {heros} from './styles/style.css';
import Footer from './components/footer'
import { Link } from 'react-scroll';

function App() {
  const hero1 = useRef(null);
  const hero2 = useRef(null);
  const hero3 = useRef(null);
  const bb = useRef(null);

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
