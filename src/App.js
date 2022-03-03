import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
import Header from './components/Header'
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';



function App() {

  const [category, categorySelected] = useState("AboutMe");



  return (
    <div className="App">
    <Header categorySelected={categorySelected} />
      <main className='main'>
          {category === "ContactForm" && (
          <> <ContactForm />
          </>)}
          {category === "AboutMe" && (
                         <>
                   <About />
          </>
        )}
                  {category === "Resume" && (
                         <>
                   <Resume />
          </>
        )}
                          {category === "Portfolio" && (
                         <>
                   <Portfolio />
          </>
        )}

          <Footer/>
   
      </main>

    </div>
  );
}

export default App;