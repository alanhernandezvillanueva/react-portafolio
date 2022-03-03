import React from 'react';
import './style.css'


function Project() {

    return (
        <div className="projectContainer">

             
                <li className="projectImg" id="project1"><a href='http://ski-haus.herokuapp.com/login'><img src={require("../../assets/ski-haus.jpeg")} alt="mountain range"/></a></li>

          
              <div className="projectInfo">
                  <h3 className="projectName">Ski Haus</h3>  
                  <p>Ski Haus is an app that allowd ski shops keep track of their equipment, create contacts, and create new employees.</p> 
              </div>
 
         
          <li className="projectImg" id="project2"><a href='https://alanhernandezvillanueva.github.io/robot-gladiators1/'><img src={require("../../assets/robot-gladiators.jpg")} alt="robots fighting" /></a></li>
            
              <div className="projectInfo">
                  <h3 className="projectName">Robot Gladiators</h3>   
                  <p>Robot Gladiators is a gaming app that allows user to fight multiples enemies, it also allows users to buy attack health and skip a battle.</p>
              </div>
          
          
          <li className="projectImg"  id="project3"><a href='https://alanhernandezvillanueva.github.io/group10project/'><img src={require("../../assets/covid19-directory.png")} alt="Utah Valley"/></a></li>
              <div className="projectInfo">
                  <h3 className="projectName">Covid 19 Testing Centers</h3>   
                  <p>Covid 19 Directory allows Utah residenst to find the nearest testing center when they select a zip code </p>
              </div>
         

        
          <li className="projectImg"><a href='https://alanhernandezvillanueva.github.io/passwordgenerator-/'><img src={require("../../assets/password-generator.webp")} alt="Computer sequences"/></a></li>
            
              <div className="projectInfo">
                  <h3 className="projectName">Password Generator</h3>   
                  <p>Password Generator allows the user get a random password based on the users criteria for a password</p>
              </div>
        

         
          <li className="projectImg"><a href='https://alanhernandezvillanueva.github.io/run-buddy/'><img src={require("../../assets/run-buddy.jpeg")} alt="person tying thier shoe lace" /></a></li>
           
              <div className="projectInfo">
                  <h3 className="projectName" >Run Buddy</h3>   
                  <p>Run Buddy allows fitness lovers to connect with trainers to gain their desired results in their fitness</p>
              </div>
        
 
            








        </div>

        
















      
    )
 

}

export default Project;