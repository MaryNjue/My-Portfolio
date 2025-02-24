import React from 'react';
import './Home.css'
import mary from '../Assets/mary.jpeg'
const Home = () => {
    return (
      <section id="home">
       <div className="homeContent">
        <span className="hello">Hello,<br/></span>
        <span className="introText">I'm <span className="introName">Mary</span> <br/> Website Developer</span> 
        <p className="introPara">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Id, aliquam . doloremque dolor recusandae exercitationem debitis.</p>
        <button className="homebtn">Hire Me</button>

       </div>
       <img src={mary} alt="" className="bg" />
      </section>
    );
}
export default Home;