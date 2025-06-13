import React from 'react'
import img from '../assets/img3.jpeg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import pixiv from '../assets/pixiv.svg'
import github from  '../assets/github.svg'
import telegram from '../assets/telegram.svg'
import gmail from '../assets/gmail.svg'
import discord from '../assets/discord.svg'
import whatsapp from '../assets/whatsapp.svg'


const About = () => {
    return (
        <div id='about' className='min-h-screen flex flex-col items-center justify-center lg:px-10 px-5 pt-4' style={{ background: '#0C0C14' }}>
            <img src={img} alt="Profile" className="w-40 h-40 rounded-full object-cover border-4 border-pink-400 shadow-lg mb-3 mt-4" />
            <div className='space-y-4 lg:pt-1 text-sm text-center text-white'>
                <h1 className='font-semibold text-4xl'>Dana Putra</h1>
                <p>Seorang mahasiswa yang selalu ingin belajar hal baru seputar Teknologi dan Server</p>
                <p>sudo apt update | docker ps | v . | sudo reboot </p>
            </div>
            <div className="flex gap-6 mt-6 mb-6">
                <a href="https://www.facebook.com/share/1Dcu5dALBT/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" className="w-10 h-10 hover:scale-110 transition filter invert" />
                </a>
                 <a href="https://t.me/Dana_putra" target="_blank" rel="noopener noreferrer">
                    <img src={telegram} alt="telegram" className="w-10 h-10 hover:scale-110 transition filter invert" />
                </a>
                 <a href="https://www.pixiv.net/users/45702135" target="_blank" rel="noopener noreferrer">
                    <img src={pixiv} alt="pixiv" className="w-10 h-10 hover:scale-110 transition filter invert" />
                </a>

                <a href="https://www.instagram.com/dana_putra13/profilecard/?igsh=MXhhY2N3cHBnNW00cg==" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" className="w-10 h-10 hover:scale-110 transition filter invert" />
                </a>
                <a href="https://github.com/DanaPutra133" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Github" className="w-10 h-10 hover:scale-110 transition filter invert" />
                </a>
                <a href="https://wa.me/6281289694906" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="whatsapp" className="w-10 h-10 hover:scale-110 transition filter invert" />
                </a>

           </div>
        </div>
        )
}

export default About
