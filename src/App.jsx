import React, { Suspense, lazy } from 'react'
import { VisitedPagesProvider } from './contexts/VisitedPagesContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
// Static component imports
import Topnav from './components/Topnav'
// Lazy component imports
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
// import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'

function App() {
  return (
    <VisitedPagesProvider>
      <BrowserRouter>
        <ScrollToTop />
          <div className="App">
          <Topnav />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </VisitedPagesProvider>
  )
}

export default App
