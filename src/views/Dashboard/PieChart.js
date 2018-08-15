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
  }, {
    value: 27,
    name: 'nazwa 4'
  }
]

class PieChart extends React.Component {
  state = {
    chartWidth: 500,
    chartHeight: 500
  }

  componentDidMount() {
    this.setState({
      chartWidth: ( window.innerWidth) / 2,
      chartHeight:  (window.innerHeight) /2
    })
  }

  render() {
    return (
      <div>
        <Chart width={this.state.chartWidth} height={this.state.chartHeight}>
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
  }


}

export default PieChart