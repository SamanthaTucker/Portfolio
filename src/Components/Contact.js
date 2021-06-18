import React, { Component } from 'react' 

// Material ui import:
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


export default class Contact extends Component {

    render(){
        return(

        <div className='contact-div' id='contact'>

            <Container fixed>
                <div id='contact-flex-div'>
            
                    <div className='contact-info-div'>
                        <h2 className='contact-h2'>Contact Me:</h2>

                        <p className='contact-p'>Looking for a freshly Graduated Bootcamp Engineer? I am open to remote or on site Software Engineering and Front-end Developer Roles!</p>
                    </div>

                    <div className='button-div'>
                        <Button id='contact-btn' variant="outlined" href='https://www.linkedin.com/in/samantha-tucker-1827a9128/'>LinkedIn</Button>
                        <Button id='contact-btn2' variant="outlined" href='https://docs.google.com/document/d/1faLABijQq3DmK7PiPvmZJTbre-hB1ggwukv-_GVEyNQ/edit?usp=sharing'> Resume</Button>
                    </div>
                </div>

            </ Container>

        </div>
        )
    }
}