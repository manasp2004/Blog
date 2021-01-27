import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortControl = new AbortController()
            fetch(url, { signal: abortControl.signal })
            .then(res => {
                if (!res.ok) throw Error("Could not fetch Data")
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("Fetch Aborted Intentionally")
                } else {
                    setError(err.message)
                    setIsPending(false)
                }
            })
        return () => abortControl.abort()
    }, [url])
    
    return { data, isPending, error }
}

export default useFetch