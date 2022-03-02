import React from 'react';
import Nav from "../Nav";
import './style.css'



function Header(props) {
    
    const {
        categorySelected
    } = props;


    

    
    

    return (
        <header className='header-bg'> 
           
            <h1 className='header-name'>Alan Hernandez</h1>
            
            <Nav 
            categorySelected={categorySelected}
            />
        </header>
    )
}

export default Header;