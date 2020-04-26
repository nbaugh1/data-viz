import React from "react";
import useFetch from '../hooks'
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import Button from 'react-bootstrap/Button'

const RechartsLineChart = () => {



    // const req = async () => {
    //     const arr = []
    //     const resp = await fetch("https://pomber.github.io/covid19/timeseries.json")
    //     const data = await resp.json()
    //     const info = await data["US"].map(({ date, confirmed, recovered, deaths }) =>
    //         arr.push(date, confirmed, recovered, deaths)
    //     )
    //     return arr
    // }
    // setData()


    return (
        <div>
            <LineChart
                LineChart
                width={1000}
                height={400}
                data={["test"]}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>
            <Button>Click</Button>
        </div>
    );
};

export default RechartsLineChart;
