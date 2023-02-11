
import React, {useState} from 'react'


export default function Questions (){

    const [formData, setFormData] = useState({
        // id:'',
        first_name:'',
        last_name:'',
        role:'',
        duties:'',
        additional_thoughts:''
    })

    const [teamQuantity, setTeamQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
       if (!formData.first_name || !formData.last_name || !formData.role || !formData.duties){
        alert(`You are missing the following feilds: ${!formData.first_name ? 'First Name ' : ''}${!formData.last_name ? 'Last Name ' : ''}${!formData.role ? 'Role ' : ''}${!formData.duties ? 'Duties ' : ''}`)
        return
       }else{
        const newData = {
            ...formData,
            first_name:formData.first_name.charAt(0).toUpperCase() + formData.first_name.slice(1),
            last_name : formData.last_name.charAt(0).toUpperCase() + formData.last_name.slice(1),
            id: teamQuantity}
        setFormData({...formData, [`${formData.lat_name}` + ', ' + `${formData.last_name}`]: newData })
    
        localStorage.setItem(`${newData.id}_${newData.last_name}`, JSON.stringify(newData))
        console.log(localStorage)
        setTeamQuantity(teamQuantity + 1)
        // localStorage.clear()
    }
}

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    console.log(localStorage)
    

    return(
        <form id='newTeamMem' onSubmit={handleSubmit}>
            <label htmlFor='first_name'>First Name: </label>
            <input type='text' name='first_name' placeholder='First Name' onChange={handleChange} />
            <label htmlFor='last_name'>Last Name: </label>
            <input type='text' name='last_name' placeholder='Last Name' onChange={handleChange} />
            <label htmlFor='role'>Role: </label>
            <input type='text' name='role' placeholder='Role'onChange={handleChange} />
            <label htmlFor='duties'>Duties: </label>
            <input type='textarea' name='duties' rows='4' cols='50' placeholder='Duties' onChange={handleChange} />
            <label htmlFor='additional_thoughts'>Additional Thoughts: </label>
            <input type='textarea' name='additional_thoughts' rows='6' cols='50' placeholder='Additional Thoughts' onChange={handleChange} />
            <input type='submit' value='Submit'/>
        </form>
    )
}