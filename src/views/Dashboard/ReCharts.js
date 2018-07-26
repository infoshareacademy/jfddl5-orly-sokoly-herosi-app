import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts'

const data = [
    { 
      time: "Typ Ankiety 1",
      users: 5,
    },
    {
      time: "Typ Ankiety 2",
      users: 3,
    },{
      time: "Typ Ankiety 3",
      users: 7,
    },{
        time: "Typ Ankiety 4",
        users: 9,
      }
  ]
const styles={width: '100vw', height: '100vh'}

const ReCharts =()=> (
    <div style={styles}>
    <BarChart width={750} height={300} data={data}>
      <CartesianGrid strokeDasharray="30 30" />
      <XAxis dataKey="time" />
      <YAxis />
      <Bar label={true} data={1} fill="#3366FF" />
      {/* <Bar label={true} dataKey="users" fill="#000000" /> */}
      

    </BarChart>
  </div>
)

export default ReCharts