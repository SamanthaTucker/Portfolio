import React, { Component } from 'react' 

export default class About extends Component {

    render(){
        return(

        <div className='about-div' id='about'>
            <h2 className='about-h2'>Let Me Introduce Myself</h2>

            <div className='about-flex'>

                <p className='about-intro'>
                    I am a Full Stack Developer based in Denver Colorado and recent Graduate of General Assembly. I have certifications in Front End Web Development and Software Engineering & Computer Science from General Assembly. I have a passion for developing full stack applications and focusing on front end design.
                    </p>

                <div className='profile-img-div'>
                <img className='profile-img'src='https://i.imgur.com/oQ2boMX.jpg'></img>
                </div>

            </div>
        </div>


        )
    }

}