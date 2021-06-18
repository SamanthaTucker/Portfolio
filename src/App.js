import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import './App.css'


import Container from '@material-ui/core/Container'



class App extends Component {


  render() {
  return (
    <Container maxWidth='lg' className="App">

      <Navbar />

      <Header />

      <About />

      <Skills /> 


      <h1 className='projects-h1'> Projects </h1>
      <Projects />

      <Contact />

      <Footer />
    </Container>
  );
}
}

export default App;
