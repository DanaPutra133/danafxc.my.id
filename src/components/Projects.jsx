import React from 'react'
import ProjectsCard from './ProjectsCard'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'

const Projects = () => {
    return (
        <div id='project' className='p-4 md:p-8' style={{ background: '#0C0C14' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-0 justify-center mx-auto max-w-5xl'>
                <div className='p-1 flex flex-wrap gap-1'>
                    <ProjectsCard 
                        image={project1}
                        title="REST API"
                        description="Simple RestAPI, scraping web and CRUD untuk keperluan reminder kelas"
                        demoUrl="https://api.danafxc.my.id" 
                        demoLabel="Visit"
                    />
                </div>
                <div className='p-1 flex flex-wrap gap-1'>
                    <ProjectsCard 
                        image={project2}
                        title="AQUA BOT"
                        description="Simple WhatsappBot base by BETABOTZ MD2 with Baileys API"
                        sourceUrl="https://github.com/DanaPutra133/AQUABOT-V4"
                        demoUrl="https://wa.me/6285814835844"   
                        sourceLabel="Source"
                        demoLabel="Demo"
                    />
                </div>
                <div className='p-1 flex flex-wrap gap-1'>
                    <ProjectsCard 
                        image={project3}
                        title="Betabotz MD2"
                        description="Contributor Develop Powerful WhatsappBot with BETABOTZ API"
                        sourceUrl="https://github.com/ERLANRAHMAT/BETABOTZ-MD2" 
                        sourceLabel="Source"
                    />
                </div>
                <div className='p-1 flex flex-wrap gap-1'>
                    <ProjectsCard 
                        image={project4}
                        title="Betaboz Rest API"
                        description="Contributor Front End for modern design website Rest API"
                        demoUrl="https://api.betabotz.eu.org" 
                        demoLabel="Visit"
                    />
                </div>
                <div className='p-1 flex flex-wrap gap-1'>
                    <ProjectsCard 
                        image={project5}
                        title="Aqukin Tutorials"
                        description="Website for tutorials and documentation about web, bot, and more"
                        demoUrl="https://tutor.danafxc.my.id" 
                        demoLabel="Visit"
                    />
                </div>
            </div>
        </div>
        )
}

export default Projects
