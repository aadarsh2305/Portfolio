import React from 'react'
import ProjectCard from './ProjectCard'
import disneyLogo from '../../assets/Images/Disney-clone.png'
import employeeLogo from '../../assets/Images/employee-management-system-pic.jpg'
import portfolio from '../../assets/Images/Portfolio.png'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Disney-clone Website"
          main="This is a Disney website created in React js, Vite and TailwindCSS"
          ProjectLogo={disneyLogo}
          DemoLink="https://disney-clone-addy.vercel.app/"
          SourceCode="https://github.com/aadarsh2305/Disney-clone"
        />
        <ProjectCard
          title="Employee Management System"
          main="This is a Full stack project created in React js, Java, SpringBoot and MYSQL"
          ProjectLogo={employeeLogo}
          DemoLink=""
          SourceCode="https://github.com/aadarsh2305/Employee-management-system"
        />
        <ProjectCard
          title="Portfolio Project"
          main="This portfolio website is built with React.js, Vite, Node.js, and TailwindCSS, showcasing my work and skills with a modern, responsive design."
          ProjectLogo={portfolio}
          DemoLink="https://aadarsh-folio.vercel.app/"
          SourceCode="https://github.com/aadarsh2305/Portfolio"
        />
      </div>
    </div>
  )
}

export default Projects