import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const RechartsLineChart = ({ data }) => {
    const chartData = []
    chartData.push(data["US"])
    return (
        <div>
            <LineChart
                LineChart
                width={1000}
                height={400}
                data={chartData[0]}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default RechartsLineChart;
