import React from 'react'
import './Projects.css'
import project1 from '../Assets/project-1.png'
import project2 from '../Assets/project-2.png'
import project3 from '../Assets/project-3.png'
import project4 from '../Assets/project-4.png'
import project5 from '../Assets/project -5.jpg'
import project6 from '../Assets/mary.jpeg'

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectstittle">My Portfolio</h2>
        <span className="projectDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam magnam non consequatur officia delectus ullam qui natus saepe temporibus placeat debitis a commodi quidem, culpa consectetur. Ut, eaque sint, nisi magnam aliquam ipsum alias, ex labore cupiditate optio veniam tempora
             amet repellat explicabo dolores beatae voluptates dolorem enim facere laudantium.</span>
        <div className="projectsimgs">
            <img src={project1} alt="" className="projectsimg" />
            <img src={project2} alt="" className="projectsimg" />
            <img src={project3} alt="" className="projectsimg" />
            <img src={project4} alt="" className="projectsimg" />
            <img src={project5} alt="" className="projectsimg" />
            <img src={project6} alt="" className="projectsimg" />
        </div>
        <button className="projectsbtn">See More</button>
    </section>
  )
}

export default Projects
