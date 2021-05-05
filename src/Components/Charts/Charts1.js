import React from 'react';
import { LineChart, Line,ResponsiveContainer,CartesianGrid, XAxis, YAxis,Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function Charts1(){
    return(
        <>
        <ResponsiveContainer height={63} width='100%'>
        <LineChart  data={data}>
        <Line type="monotone" dataKey="pv" stroke="#4E56D4" strokeWidth={2} />
         <Tooltip/>
        </LineChart>
        </ResponsiveContainer>
    </>
    )
}

export default Charts1