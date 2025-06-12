import React from 'react'

const ProjectsCard = ({ title, description, image, demoUrl, sourceUrl, demoLabel, sourceLabel }) => {
    return (
        <div
            className="max-w-sm overflow-hidden flex flex-col justify-between h-60" // lebih pendek dari sebelumnya
            style={{ background: '#181824', minHeight: '15rem' }}
        >
            {image && (
                <img src={image} alt={title} className='w-full h-28 object-cover rounded' />
            )}
            <div className='flex-1 flex flex-col justify-between'>
                <div className='px-2 py-1 mt-1'>
                    <h3 className='px-1 text-base md:text-lg font-semibold leading-normal text-white'>{title}</h3>
                    <p className='px-1 text-xs leading-tight py-0.5 text-white'>{description}</p>
                </div>
                <div className='p-1 flex gap-1 mt-auto'>
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='py-0.5 px-2 text-xs hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-pink-700 text-white'
                        >
                            {demoLabel || 'Demo'}
                        </a>
                    )}
                    {sourceUrl && (
                        <a
                            href={sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='py-0.5 px-2 text-xs hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-pink-700 text-white'
                        >
                            {sourceLabel || 'Source Code'}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard