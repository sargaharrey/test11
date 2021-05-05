import React from 'react';
import { RadarChart, PolarGrid,Radar,PolarAngleAxis,PolarRadiusAxis,Legend,ResponsiveContainer,CartesianGrid, XAxis, YAxis,Tooltip } from "recharts";
const data = [
  {
    "subject": "Math",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Chinese",
    "A": 98,
    "B": 30,
    "fullMark": 150
  },
  {
    "subject": "English",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Geography",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "Physics",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "History",
    "A": 65,
    "B": 85,
    "fullMark": 150
  }
]

function Charts5(){
    return(
        <>
        <ResponsiveContainer height={216} width='100%'>
              <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="A" stroke="#4E56D4" fill="#4E56D4"  />
        <Radar name="Lily" dataKey="B" stroke="#0C1427" fill="#0C1427"  />
       
        </RadarChart>
        </ResponsiveContainer>
    </>
    )
}

export default Charts5