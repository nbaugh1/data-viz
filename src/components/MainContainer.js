import React, { useState } from 'react'
import RechartsLineChart from './RechartsLineChart'
import Button from 'react-bootstrap/Button'
import useAxios from 'axios-hooks'

export const MainContainer = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        "https://pomber.github.io/covid19/timeseries.json"
    )
    const [chartData, setChartData] = useState([])

    if (loading) return <p>loading</p>
    if (error) return <p>error</p>
    return (
        <div>
            <RechartsLineChart data={data} />
            <Button onClick={refetch}>Click</Button>
        </div>
    )
}

export default MainContainer