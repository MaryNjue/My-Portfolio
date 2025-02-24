import React from 'react'
import './Skills.css'
import checkmark from '../../src/Assets/checkmark.png'
import experience from '../Assets/experience.png'
import github from '../Assets/github.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTittle">What I Do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad. Maiores reprehenderit dolor tempora odit aliquid eos nihil, vel deserunt optio magni nesciunt magnam nemo qui nisi fuga quaerat nam amet, iste praesentium tempore ullam, corrupti voluptatum enim! Reiciendis minima saepe tempore inventore libero, minus officia nobis aliquam doloremque natus?</span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={checkmark} alt=">UI/UX Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
        <div className="skillbars">
            <div className="skillbar">
                <img src={experience} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Wesite Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
        <div className="skillbars">
            <div className="skillbar">
                <img src={github} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Development</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
