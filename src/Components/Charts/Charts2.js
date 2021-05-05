import React from 'react';
import { BarChart, Bar,ResponsiveContainer,CartesianGrid, XAxis, YAxis,Tooltip } from "recharts";
const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 7000,
    "pv": 7000
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

function Charts2(){
    return(
        <>
        <ResponsiveContainer height={63} width='100%'>
              <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          
          <Tooltip />
          <Bar dataKey="pv" fill="#4E56D4" />
         
        </BarChart>
        </ResponsiveContainer>
    </>
    )
}

export default Charts2