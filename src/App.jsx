import React from 'react'
import { ScrollTrigger, SplitText} from 'gsap/all'
import gsap from 'gsap/gsap-core'
import Navbar from './components/navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black' />
    </main>
  )
}

export default App