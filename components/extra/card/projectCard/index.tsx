import React from 'react'

interface Props {
    children: React.ReactNode
}
const ProjectCard: React.FC<Props> = ({ children }) => {
    return (
        <div className='relative w-full h-full'>
            <div className="relative border-2 shadow-lg shadow-black border-black rounded-lg bg-white h-full w-full p-5">
                {children}
            </div>
        </div>
    )
}

export default ProjectCard