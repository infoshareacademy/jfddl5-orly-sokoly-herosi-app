import React from 'react'
import { connect } from 'react-redux'
import { PieChart as Chart, Pie, Tooltip } from 'recharts'



class PieChart extends React.Component {
  state = {
    chartWidth: 500,
    chartHeight: 500
  }

  onWindowResize = () => {
    this.setState({
      chartWidth: (window.innerWidth) / 1.7,
      chartHeight: (window.innerHeight) / 1.7
    })
  }

  componentDidMount() {
    this.setState({
      chartWidth: (window.innerWidth) / 1.7,
      chartHeight: (window.innerHeight) / 1.7
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
    const calculateCategoryAmount = (categoryName) => (
      (this.props._surveys && this.props._surveys.filter(e => e.category === categoryName).length) || 0
    )

    const data = [
      {
        value: calculateCategoryAmount('Work'),
        name: 'Work'
      },
      {
        value: calculateCategoryAmount('Alkohols'),
        name: 'Alcohol'
      },
      {
        value: calculateCategoryAmount('Hobby'),
        name: 'Hobby'
      }, {
        value: calculateCategoryAmount('People'),
        name: 'People'
      },{
        value: calculateCategoryAmount('Research'),
        name: 'Research'
      }
    ]


    
    console.log(this.props._surveys, data[0])

    return (
      <div>
        <Chart width={this.state.chartWidth} height={this.state.chartHeight}>
          <Pie
            //style={styles}
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


const mapStateToProps = (state) => ({
  _surveys: state.surveys.surveyList
})

export default connect(
  mapStateToProps, null
)(PieChart)