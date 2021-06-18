import React, { Component } from 'react' 


export default class Navbar extends Component {

    render(){
        return(
            <div className='root-div'>

            <a className='initials' color='white' href="#header" >
            ST
            </a>

            <a className='nav-link' color='white' href="#about" >
            About Me
            </a>

            <a className='nav-link' color='white' href="#skills" >
            Skills
            </a>

            <a className='nav-link' color='white' href="#projects" >
            Projects
            </a>

            <a className='nav-link' color='white' href="#contact" >
            Contact
            </a>

            </div>
        )
    }
}