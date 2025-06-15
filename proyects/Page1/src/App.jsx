import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero.jsx'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, });
  }, []);

  return (
    <main className='bg-[#0d182e]'>
      <Hero />
    </main>
  );
}

export default App;