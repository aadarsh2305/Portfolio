import React from 'react'
import ProjectCard from './ProjectCard'
import disneyLogo from '../../assets/Images/Disney-clone.png'
import employeeLogo from '../../assets/Images/employee-management-system-pic.jpg'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Disney-clone Website"
          main="This is a Disney website created in React js, Vite and TailwindCSS"
          ProjectLogo={disneyLogo}
        />
        <ProjectCard
          title="Employee Management System"
          main="this is a Full stack project created in React js, Java, SpringBoot and MYSQL"
          ProjectLogo={employeeLogo}
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
          ProjectLogo={disneyLogo}
        />
      </div>
    </div>
  )
}

export default Projects