import React from 'react'
import img from '../assets/img.png'


const About = () => {
    return (
        <div id='about' className='border min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
            <img src={img} alt="img" className='lg:w-10/12'/>
            <div className='space-y-4 lg:pt-14 ml-6 text-sm'>
                <h1 className='font-semibold text-4xl text-center md:text-start'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Tenetur, excepturi voluptatibus 
                    accusantium at natus minima!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur 
                        dipisicing elit. Laborum iste, 
                        provident ab non qui cumque.</p>
            </div>
        </div>
        )
}

export default About