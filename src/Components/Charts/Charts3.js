import React from 'react';
import { LineChart, Line,ResponsiveContainer,CartesianGrid, XAxis, YAxis,Tooltip } from "recharts";
const data = [
  {
    "name": "Page A",
    "uv": 5000,
    "pv": 4000,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 2000,
    "pv": 3398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2500,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 9000,
    "pv": 9800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

function Charts3(){
    return(
        <>
        <ResponsiveContainer height={63} width='100%'>
                <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
       
        <Tooltip />
        
        <Line type="monotone" dataKey="pv" stroke="#4E56D4" />
        
      </LineChart>
        </ResponsiveContainer>
    </>
    )
}

export default Charts3