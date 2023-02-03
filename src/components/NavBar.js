import React from 'react';
import {Link} from 'react-router-dom'


export default function NavBar () {

        return(
            <div>
                <div><h3><Link to='/'>Home</Link></h3></div>
                <div><h3>My Teams</h3></div>
                <div><h3><Link to='/query'> Create New Team</Link></h3></div>
                <div><h3>Contact</h3></div>
                <div><h3>ReadMe</h3></div>
            </div>
        )
}
    
