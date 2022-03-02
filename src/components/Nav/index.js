import React from 'react'
import './style.css'




function Nav(props) {
  
    

    const {
        categorySelected
    } = props;
    
  
     return (
        <ul className="nav">
           <li className='nav-item' onClick={() => categorySelected("AboutMe")}>About Me</li>
           <li className='nav-item' onClick={() => categorySelected("MyWork")}>My Work</li>
           <li className='nav-item' onClick={() => categorySelected("Resume")}>Resume</li>
           <li className='nav-item' onClick={() => categorySelected("ContactForm")}>Contact</li>
          
        </ul>
    )
}

export default Nav;
