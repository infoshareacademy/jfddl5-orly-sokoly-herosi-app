import React from 'react'
import { PieChart as Chart, Pie, Tooltip } from 'recharts'


const data = [
    {
      value: 30,
      name: 'nazwa 3'
    },
    {
      value: 40,
      name: 'nazwa 2'
    },
    {
      value: 27,
      name: 'nazwa 1'
    },{
        value: 27,
        name: 'nazwa 4'
      }
  ]

const PieChart =() =>(
    <div>
    <Chart width={500} height={500}>
      <Pie 
        data={data}
        dataKey="value"
        nameKey="name"
        fill="#3366FF" 
      />
      <Tooltip />
    </Chart>
    </div>


)

export default PieChart