import {useState, useEffect} from 'react'

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            try {
                const res = await fetch(url, options)
                const json = await res.json()
                setResponse(json)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [url, options])

    return { response, error }
}

export default useFetch