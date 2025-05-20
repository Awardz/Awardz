import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Resume from './components/Resume'
import { lazy } from 'react';

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
  
  
    <div className="scroll-smooth flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100 via-blue-50 to-pink-50 animate-gradient-flow" />
            <Suspense fallback={<div>Loading...</div>}>
            <VantaBackground />
          </Suspense>
      </div>
  
          <Navbar />
  
          <section id="hero">
            <Hero />
          </section>

          <section id="welcome" className="min-h-screen flex items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-white">Welcome to my site!</h1>
          </section>


          <Resume />
    
          <section id="hello" className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600">Hello, world!</h1>
          </section>

          <Footer />
        </div>

)
}

export default App
