import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Artwork from './components/Artwork'
import Resume from './components/Resume'
import img from './assets/img3.jpeg' // import foto profil

const App = () => {
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800) // mulai fade out sebelum splash hilang
    const hideSplashTimer = setTimeout(() => setShowSplash(false), 2400) // 1.8 detik
    const showContentTimer = setTimeout(() => setShowContent(true), 2600) // tambahkan delay sebelum konten utama muncul
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideSplashTimer)
      clearTimeout(showContentTimer)
    }
  }, [])

  return (
    <Router>
      <div style={{ background: '#0C0C14', minHeight: '100vh' }}>
        {showSplash ? (
          <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0C14] transition-all duration-700 ${fadeOut ? 'animate-splash-fadeout' : ''}`}>
            <img
              src={img}
              alt="Splash"
              className="w-40 h-40 rounded-full border-4 border-pink-400 shadow-lg mb-6 animate-splash-pop"
              style={{ objectFit: 'cover' }}
            />
            <h1 className="text-white text-3xl font-bold animate-splash-fade">Selamat Datang!</h1>
            <style>
              {`
                @keyframes splash-pop {
                  0% { transform: scale(0.7); opacity: 0; }
                  60% { transform: scale(1.1); opacity: 1; }
                  100% { transform: scale(1); opacity: 1; }
                }
                .animate-splash-pop {
                  animation: splash-pop 1s cubic-bezier(0.4,0,0.2,1);
                }
                @keyframes splash-fade {
                  0% { opacity: 0; }
                  100% { opacity: 1; }
                }
                .animate-splash-fade {
                  animation: splash-fade 1.2s 0.5s both;
                }
                @keyframes splash-fadeout {
                  from { opacity: 1; }
                  to { opacity: 0; }
                }
                .animate-splash-fadeout {
                  animation: splash-fadeout 0.6s forwards;
                }
              `}
            </style>
          </div>
        ) : showContent ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/artwork" element={<Artwork />} />
              <Route path="/resume" element={<Resume />} /> 
            </Routes>
            <Footer />
          </>
        ) : null}
      </div>
    </Router>
  )
}

export default App
