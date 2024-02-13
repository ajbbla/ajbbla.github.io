import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Persistent components
import Topnav from './components/Topnav'
// Lazy imports
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topnav />
        <Suspense
          fallback={ 
            <div>
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        
      </div>
    </BrowserRouter>
  )
}

export default App
