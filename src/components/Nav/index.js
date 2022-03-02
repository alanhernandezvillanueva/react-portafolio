import React from "react";
import './style.css'




function Nav(props) {

  const {
    sectionSelected
} = props;
  
  

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Alan Hernandez
        </a>
      </h2>
      <nav>
        <ul className="navBar">
        <li className='nav-link' onClick={() => sectionSelected("AboutMe")}>About Me</li>
        <li className='nav-link' onClick={() => sectionSelected("Portfolio")}>Portfolio</li>
        <li className='nav-link' onClick={() => sectionSelected("Resume")}>Resume</li>
        <li className='nav-link' onClick={() => sectionSelected("ContactForm")}>Contact</li>
          
        </ul>
      </nav>
      </header>
     )}


export default Nav;