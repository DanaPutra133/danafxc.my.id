import React from 'react'
import logo from '../assets/loogo.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const Utama = () => {
  return (
    <section className='' style={{ background: '#0C0C14' }}>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
          <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug text-white'>Hi, <br />Nama ku <br/>Dana Putra</h1>
          <p className='md:text-2xl text-xl mb-4 text-white'>Not pro gamer, Illustrator</p>
          <p className='mb-4 text-white'>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Repellat rerum nisi facere 
            odit autem perspiciatis quia, 
            aperiam iusto eveniet modi?</p>
            {/* <button className='bg-pink-500 px-3 py-2 w-max rounded-md font-semibold'>contact me</button> */}
        </div>
        <div className='md:w-1/2 relative flex justify-center items-end'>
          {/* <img src={logo} alt="" className='lg:h-[90vh] h-96'/> */}
          <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden filter invert' />
          <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden filter invert'/>
          <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden filter invert'/>
        </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
        <img src={facebook} alt="" className='w-20 filter invert'/>
        <img src={instagram} alt="" className='w-20 filter invert'/>
        <img src={twitter} alt="" className='w-20 filter invert'/>
        <img src={linkedin} alt="" className='w-20 filter invert'/>
      </div>
    </section>
    )
}

export default Utama