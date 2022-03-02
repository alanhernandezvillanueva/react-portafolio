import React from 'react';
import profilePic from "../../assets/IMG_1463 (1).jpg";
import './style.css'

function About() {
    return (
        <div className='about-container'>
            <div className="profilePicContainer">
            <img src={profilePic} className='profile-img' alt="profile"></img>
            </div>
            <div className="myBioContainer">
       <p className='aboutMe'> Hello there! My name is Alan, thank you for stopping by. 
       I’ve always been intrigued by the coding world and when I had the opportunity to join the University of Utah’s Coding bootcamp program, 
       I didn't have to think twice. Thanks to the bootcamp I was able to develop knowledge on innovative coding languages, and became proficient in HTML, CSS, JavaScript, NodeJS, SQL, NoSQL, MongoDB, REACT and MERN. During Most of my professional life, I’ve worked in customer service, I believe that combining my drive to have happy customers, strong will to learn and improve,  and knowledge in web development I’ll be able to deliver the desired results.</p>
       </div>
       </div>
    )
}

export default About;