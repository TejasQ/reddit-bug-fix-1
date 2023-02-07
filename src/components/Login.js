import react from 'react'

export default function Login () {

    const [data, setData] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost/5445/user/:id')
          setData(response.data)
        } catch (error) {
          console.error(error)
        }
      }
  
      fetchData()
    }, [])

    return(
        <div>

        </div>
    )
}