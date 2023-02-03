import React from 'react'

export default function Questions (){

    const handleSubmit = () => {
        e.preventDefault
        
    }

    return(
        <form id='newTeamMem' onSubmit={handleSubmit}>
            <label htmlFor='first_name'>First Name: </label>
            <input type='text' name='first_name' placeholder='First Name' />
            <label htmlFor='last_name'>Last Name: </label>
            <input type='text' name='last_name' placeholder='Last Name'/>
            <label htmlFor='role'>Role: </label>
            <input type='text' name='role' placeholder='Role' />
            <label htmlFor='duties'>Duties: </label>
            <input type='textarea' name='duties' rows='4' cols='50' />
            <label htmlFor='additional_thoughts'>Additional Thoughts: </label>
            <input type='textarea' name='additional_thoughts' rows='6' cols='50' />
            <input type='submit' value='Submit'/>
        </form>
    )
}