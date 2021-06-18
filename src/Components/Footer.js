import React, { Component } from 'react' 

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


export default class Footer extends Component {

    render(){
        return(

        <div className='footer-div' id='footer'>

            <a className='initials' color='white' href="#header" >
            ST
            </a>

            <a className='nav-link' color='white' href="#skills" >
            Built by Samantha Tucker © 2021
            </a>

        </div>
        )
    }
}