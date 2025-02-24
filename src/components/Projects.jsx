import React from 'react'
import ProjectsCard from './ProjectsCard'
import cake from '../assets/Cake.png'
import petibo from '../assets/Petibo.png'
import learning from '../assets/learn.png'

const Projects = () => {
    return (
        <div id='project' className='p-10 md:p-24 border'>
            <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                <div className='py-12 px-14 flex flex-wrap gap-5'>
                    <ProjectsCard 
                    image={cake}
                    title="Cake Bake"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, quibusdam."
                    />
                </div>
                <div className='py-12 px-14 flex flex-wrap gap-5'>
                    <ProjectsCard 
                    image={petibo}
                    title="Petibo"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, quibusdam."
                    />
                </div>
                <div className='py-12 px-14 flex flex-wrap gap-5'>
                    <ProjectsCard 
                    image={learning}
                    title="Learning"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, quibusdam."
                    />
                </div>
            </div>
        </div>
        )
}

export default Projects