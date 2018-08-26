import React from 'react'
import { connect } from 'react-redux'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'



const styles = { width: '100vw', height: '100vh' }

class ReCharts extends React.Component {

    state = {
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

    calculateLoginDate = () => {
        const day = 24 * 60 * 60 * 1000
        const now = new Date()
        const dayOne = now.getTime() - (now.getHours() * 60 * 60 * 1000 + now.getMinutes() * 60 * 1000 + now.getSeconds() * 1000 + now.getMilliseconds())

        const dayTwo = dayOne - day
        const dayThree = dayTwo - day
        const dayFour = dayThree - day
        const dayFive = dayFour - day
        const daySix = dayFive - day
        const daySeven = daySix - day


        const data = [
            {
                time: "Six day ago",
                users: this.props._timestamps ? this.props._timestamps.filter((timestamp) => timestamp > daySeven && timestamp <= daySix).length :
                    0,
            },
            {
                time: "Five day ago",
                users: this.props._timestamps ? this.props._timestamps.filter((timestamp) => timestamp > daySix && timestamp <= dayFive).length :
                    0,
            }, {
                time: "Four day ago",
                users: this.props._timestamps ? this.props._timestamps.filter((timestamp) => timestamp > dayFive && timestamp <= dayFour).length :
                    0,
            }, {
                time: "Three day ago",
                users: this.props._timestamps ? this.props._timestamps.filter((timestamp) => timestamp > dayFour && timestamp <= dayThree).length :
                    0,
            },
            {
                time: "Two day ago",
                users: this.props._timestamps ? this.props._timestamps.filter((timestamp) => timestamp > dayThree && timestamp <= dayTwo).length :
                    0,
            },
            {
                time: "Yesterday",
                users: this.props._timestamps ? this.props._timestamps.filter((timestamp) => timestamp > dayTwo && timestamp <= dayOne).length :
                    0,
            },
            {
                time: "Today",
                users:
                    this.props._timestamps ? this.props._timestamps.filter((timestamp) => timestamp > dayOne).length :
                        0
            }
        ]

        return data
    }

    render() {
        const data = this.calculateLoginDate()



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


const mapStateToProps = (state) => ({
    _timestamps: state.auth.timestamp
})

export default connect(
    mapStateToProps, null
)(ReCharts)