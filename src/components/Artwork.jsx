import React, { useState } from 'react'
import img1 from '../assets/artwork1.png'
import img2 from '../assets/artwork2.jpg'
import img3 from '../assets/artwork3.jpg'
import img4 from '../assets/artwork4.jpg'
import img5 from '../assets/artwork5.png'
import img6 from '../assets/artwork6.png'
import img7 from '../assets/artwork7.png'
import img8 from '../assets/artwork8.jpg'
import img9 from '../assets/artwork9.jpg'
import img10 from '../assets/artwork10.jpg'
import img11 from '../assets/artwork11.jpg'
import img12 from '../assets/artwork12.jpg'
import img13 from '../assets/artwork13.jpg'
import img14 from '../assets/artwork14.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const Artwork = () => {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <div id='Artwork' className='min-h-screen p-4 md:p-8' style={{ background: '#0C0C14' }}>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className='p-2 flex justify-center items-center bg-[#181824] rounded-lg'
                        style={{ minHeight: '320px', height: '100%' }}
                    >
                        <img
                            src={src}
                            alt={`artwork-${idx}`}
                            className="w-full max-h-80 object-contain rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer bg-[#181824]"
                            style={{ background: '#181824' }}
                            onClick={() => setOpenIdx(idx)}
                        />
                    </div>
                ))}
            </div>
            {openIdx !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-all duration-300"
                    onClick={() => setOpenIdx(null)}
                >
                    <img
                        src={images[openIdx]}
                        alt={`artwork-large-${openIdx}`}
                        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl transition-transform duration-300 scale-100 animate-artwork-zoom"
                        style={{ background: '#181824' }}
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
            <style>
                {`
                @keyframes artwork-zoom {
                    from { transform: scale(0.7);}
                    to { transform: scale(1);}
                }
                .animate-artwork-zoom {
                    animation: artwork-zoom 0.25s cubic-bezier(0.4,0,0.2,1);
                }
                `}
            </style>
        </div>
    )
}

export default Artwork