import React from 'react';
import { AreaChart, Area,ResponsiveContainer,CartesianGrid, XAxis, YAxis,Tooltip } from "recharts";
const data = [
  {
    "name": "Jan",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Feb",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Mar",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Apr",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "May",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Jun",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Jul",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Aug",
    "uv": 2000,
    "pv": 5000,
    "amt": 2100
  },
  {
    "name": "Sep",
    "uv": 5000,
    "pv": 1000,
    "amt": 2100
  },
  {
    "name": "Oct",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },
  {
    "name": "Nov",
    "uv": 5000,
    "pv": 3000,
    "amt": 2100
  },
  {
    "name": "Dec",
    "uv": 1000,
    "pv": 1000,
    "amt": 2100
  }
]

function Charts4(){
    return(
        <>
        <ResponsiveContainer height={216} width='100%'>
                      <AreaChart width={730} height={250} data={data}
           margin={{ top: 0, left: -10, right: 0, bottom: 0 }} padding={0}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4E56D4"  stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#172340" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4E56D4"  stopOpacity={0.8} />
              <stop offset="95%" stopColor="#172340" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#4E56D4" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#172340" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        </ResponsiveContainer>
    </>
    )
}

export default Charts4