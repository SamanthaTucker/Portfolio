import React, { Component } from 'react' 

export default class Header extends Component {

    render(){
        return(

        <div className='header-div' id='header'>
            <img className='header-image' src='https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'></img>

            <div className='header-intro'>
                <h1 className='header-h1'>Samantha Tucker</h1>
                <h2 className='header-h2'>Full Stack Software Engineer | Software Developer</h2>
            </div>
        </div>


        )
    }

}