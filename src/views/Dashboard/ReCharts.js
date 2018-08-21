import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'

const data = [
  {
    time: "Typ Ankiety 1",
    users: 5,
  },
  {
    time: "Typ Ankiety 2",
    users: 3,
  }, {
    time: "Typ Ankiety 3",
    users: 7,
  }, {
    time: "Typ Ankiety 4",
    users: 9,
  }
]
const styles = { width: '100vw', height: '100vh' }

class ReCharts extends React.Component {

  state={
    chartWidth: 500,
    chartHeight: 200
  }
  
  onWindowResize = () => {
    this.setState({
      chartWidth: (window.innerWidth) / 1.7,
      chartHeight: (window.innerWidth) / 2.8
    })

  }


  componentDidMount() {
    this.setState({
      chartWidth: (window.innerWidth) / 1.7,
      chartHeight: (window.innerWidth) / 2.8
    })

    window.addEventListener(
      'resize',
      this.onWindowResize
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.onWindowResize
    )
  }

  render() {
    return (
      <div style={styles}>
        <BarChart width={this.state.chartWidth} height={this.state.chartHeight} data={data}>
          <CartesianGrid strokeDasharray="30 30" />
          <XAxis dataKey="time" />
          <YAxis />
          <Bar label={true} data={1} fill="#3366FF" />
          {<Bar label={true} dataKey="users" fill="yellow" />}


        </BarChart>
      </div>
    )
  }

}

export default ReCharts