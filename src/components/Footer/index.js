import React from 'react';
import './style.css'


function Footer() {
    
    return (
   <div className="footer-div">
       <footer className="footer">
           <h3>Follow me on Github and linkedIn</h3>
       <ul className="footer-list">
           <li className="footer-item"><a href="https://github.com/alanhernandezvillanueva"  target="_blank" rel="noreferrer">GitHub</a></li>
           <li className="footer-item"><a href="linkedin.com/in/alan-hernández-villanueva-237784171" target="_blank" rel="noreferrer">Linkedin</a></li>
           
       </ul>
       
       </footer>
   </div>
    )
}

export default Footer;