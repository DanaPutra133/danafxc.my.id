import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full px-3' style={{ background: '#0C0C14' }}>
      <div className='max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-center w-full'>
          <nav className='flex items-center space-x-4 text-base md:text-lg font-medium text-white'>
            <Link to="/" className='transition-colors hover:text-pink-400'>About</Link>
            <Link to="/project" className='transition-colors hover:text-pink-400'>Project</Link>
            <Link to="/artwork" className='transition-colors hover:text-pink-400'>Artwork</Link>
            <Link to="/resume" className='transition-colors hover:text-pink-400'>Resume</Link>
            
          </nav>
        </div>
      </div>
    </header>
    )
}

export default Navbar
