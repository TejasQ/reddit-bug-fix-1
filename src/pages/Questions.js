
import React, {useState} from 'react'
import axios from 'axios'

export default function Questions (){

    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        role:'',
        duties:'',
        additional_thoughts:''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post('http://localhost:5445/api/teams/', formData)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
// `http://localhost:${process.env.PORT}/api/teams`
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <form id='newTeamMem' onSubmit={handleSubmit}>
            <label htmlFor='first_name'>First Name: </label>
            <input type='text' name='first_name' placeholder='First Name' onChange={handleChange} />
            <label htmlFor='last_name'>Last Name: </label>
            <input type='text' name='last_name' placeholder='Last Name' onChange={handleChange} />
            <label htmlFor='role'>Role: </label>
            <input type='text' name='role' placeholder='Role'onChange={handleChange} />
            <label htmlFor='duties'>Duties: </label>
            <input type='textarea' name='duties' rows='4' cols='50' onChange={handleChange} />
            <label htmlFor='additional_thoughts'>Additional Thoughts: </label>
            <input type='textarea' name='additional_thoughts' rows='6' cols='50' onChange={handleChange} />
            <input type='submit' value='Submit'/>
        </form>
    )
}