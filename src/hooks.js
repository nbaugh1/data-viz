import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const useFetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios("https://pomber.github.io/covid19/timeseries.json")
            setData(result.data)
        }
        fetchData()
    }, [])
    return data
}
