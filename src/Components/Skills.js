import React, { Component } from 'react' 

export default class Skills extends Component {

    render(){
        return(

        <div className='skills-div' id='skills'>

        <h3 className='skills-category'>Languages: <span className='skills-list' >JavaScript // Python // HTML // CSS // Node.js // Git </span> </h3>

        <h3 className='skills-category'>Frameworks & Libraries: <span className='skills-list' >React // Flask // jQuery // Express // Mongoose // EJS // Mongoose </span> </h3>

        <h3 className='skills-category'>Databases: <span className='skills-list' > MongoDB // SQL // PostgreSQL // PeeWee </span> </h3>

        </div>

        )
    }

}