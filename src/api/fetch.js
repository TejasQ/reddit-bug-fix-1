import axios from 'axios'

const getUserData = async (user_name, password) => {
    try{
        const userData = await axios.get(`/user/${user_name}`)
    }
}