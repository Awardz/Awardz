import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Resume from './components/Resume'
import { lazy } from 'react';
import Mission from './components/Mission'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { motion} from 'framer-motion';
import Projects from './components/Projects'
import Founder from './components/Founder'
import Employees from './components/Employees'

const VantaBackground = lazy(() => import('./components/VantaBackground'));
function App() 
{


return (
 
  /* <div>
    <Navbar />
    <Hero />
    
    
    <main className="p-8">
        <h1>Welcome to my site!</h1>
      </main>
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <h1 className="text-4xl font-bold text-blue-600">Hello, world!</h1>
    </div>
    <Footer />
  </div> */
  
    <div className="scroll-smooth min-h-screen w-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
            <Suspense fallback={<div>Loading...</div>}>
            <VantaBackground />
          </Suspense>
      </div>
       <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full">  

          <Navbar />

       <section id="hero" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="font-bold text-white mb-4">
            <Hero />
          </motion.div>
        </section>

       <section id="mission" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="font-bold text-white mb-4">
            <Mission />
          </motion.div>
        </section>
          
          <section id="founder" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="font-bold text-white mb-4">
            <Founder />
          </motion.div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="font-bold text-white mb-4">
            <Employees />
          </motion.div>
        </section>
  
          <section id="resume" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="font-bold text-white mb-4">
            <Resume />
          </motion.div>
        </section>
    
          <section id="projects" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="font-bold text-white mb-4">
            <Projects />
          </motion.div>
        </section>

          <Footer />
    </motion.div>
        </div>

)
}

export default App
