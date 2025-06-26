import React, { useState, useRef } from 'react'
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
import img15 from '../assets/artwork15.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

const Artwork = () => {
    const [openIdx, setOpenIdx] = useState(null);
    const [zoomTool, setZoomTool] = useState(false);
    const [gateTool, setGateTool] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
    const imgRefs = useRef([]);

    return (
        <div id='Artwork' className='min-h-screen p-4 md:p-8' style={{ background: '#0C0C14' }}>
            {/* Tools Bar */}
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 20,
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: 16,
                gap: 12
            }}>
                <button
                    onClick={() => setZoomTool(z => !z)}
                    style={{
                        background: zoomTool ? 'linear-gradient(90deg,#6dd5ed,#FFC0CB)' : '#181824',
                        color: zoomTool ? '#222' : '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '8px 16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: zoomTool ? '0 2px 8px #6dd5ed44' : 'none',
                        transition: 'all .2s'
                    }}
                    title="Zoom Tool"
                >
                    🔍 Zoom
                </button>
                <button
                    onClick={() => setGateTool(g => !g)}
                    style={{
                        background: gateTool ? 'linear-gradient(90deg,#6dd5ed,#FFC0CB)' : '#181824',
                        color: gateTool ? '#222' : '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '8px 16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: gateTool ? '0 2px 8px #6dd5ed44' : 'none',
                        transition: 'all .2s'
                    }}
                    title="Gate Tool"
                >
                    🟪 
                </button>
            </div>
            {/* Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className='p-2 flex justify-center items-center bg-[#181824] rounded-lg relative'
                        style={{
                            minHeight: '320px',
                            height: '100%',
                            overflow: 'hidden',
                            background: gateTool ? '#2a1830' : '#181824',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                ref={el => imgRefs.current[idx] = el}
                                src={src}
                                alt={`artwork-${idx}`}
                                className={
                                    "w-full max-h-80 object-contain rounded-lg transition-transform duration-300 cursor-pointer bg-[#181824]" +
                                    (zoomTool ? " artwork-zoom-cursor" : "")
                                }
                                style={{
                                    background: '#181824',
                                    transition: zoomTool ? 'transform .25s cubic-bezier(.4,0,.2,1)' : 'transform .3s cubic-bezier(.4,0,.2,1)',
                                    transform: zoomTool && hoveredIdx === idx
                                        ? `scale(1.7) translate(${-((zoomPos.x - 50) * 0.6)}%, ${-((zoomPos.y - 50) * 0.6)}%)`
                                        : 'scale(1)',
                                    zIndex: zoomTool && hoveredIdx === idx ? 2 : 1,
                                }}
                                onClick={() => setOpenIdx(idx)}
                                onMouseEnter={e => {
                                    if (zoomTool) setHoveredIdx(idx);
                                    if (gateTool) setHoveredIdx(idx);
                                }}
                                onMouseMove={zoomTool ? (e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                                    setZoomPos({ x, y });
                                } : undefined}
                                onMouseLeave={() => setHoveredIdx(null)}
                            />
                            {/* Gate effect */}
                            {gateTool && (
                                <div
                                    className={`artwork-gate-anim ${hoveredIdx === idx ? 'show' : ''}`}
                                    style={{
                                        pointerEvents: 'none',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 3,
                                        borderRadius: 12,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div style={{
                                        width: '50%',
                                        height: '100%',
                                        background: '#FF8DA1',
                                        opacity: hoveredIdx === idx ? 0.85 : 0,
                                        borderTopLeftRadius: 12,
                                        borderBottomLeftRadius: 12,
                                        transform: hoveredIdx === idx ? 'translateX(0)' : 'translateX(-100%)',
                                        transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.2s',
                                    }} />
                                    <div style={{
                                        width: '50%',
                                        height: '100%',
                                        background: '#FF8DA1',
                                        opacity: hoveredIdx === idx ? 0.85 : 0,
                                        borderTopRightRadius: 12,
                                        borderBottomRightRadius: 12,
                                        transform: hoveredIdx === idx ? 'translateX(0)' : 'translateX(100%)',
                                        transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.2s',
                                    }} />
                                </div>
                            )}
                        </div>
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
                .artwork-zoom-cursor {
                    cursor: zoom-in;
                }
                .artwork-gate-anim {
                    pointer-events: none;
                }
                .artwork-gate-anim .show {
                    /* handled inline */
                }
                `}
            </style>
        </div>
    )
}

export default Artwork