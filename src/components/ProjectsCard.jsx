import React from 'react'

const ProjectsCard = ({ title, description , image}) => {
    return (
        <div className="max-w-sm overflow-hidden bg-background/60 shadow-xl shadow-slate-800 rounded">
            {
                image && (
                    <img src={image} alt={title} className='w-full h-42 object-cover rounded'/>
                )
            }
            <div className='px-6 py-4 mt-2'>
                <h3 className='px-4 text-xl md:text-2xl font-semibold leading-normal'>{title}</h3>
                <p className='px-4 text-sm leading-tight py-2'>{description}</p>
            </div>
            <div className='p-2 md:p-4 flex gap-2 md:gap-4'>
                <button className='md:mt-5 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-pink-700'>Demo</button>
                <button className='md:mt-5 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-pink-700'>Source Code</button>
            </div>
        </div>
    )
}

export default ProjectsCard