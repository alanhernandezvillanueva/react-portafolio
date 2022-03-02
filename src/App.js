import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {

  const [category, setCategorySelected] = useState("AboutMe");



  return (
    <div className="App">
      <Nav setCategorySelected={setCategorySelected} />
      <main className='main'>

        {category === "ContactForm" && (
          <>
            <ContactForm />
          </>
        )}

        {category === "AboutMe" && (
          <>
            <About />
          </>
        )}

          <Footer/>
   
      </main>

    </div>
  );
}

export default App;