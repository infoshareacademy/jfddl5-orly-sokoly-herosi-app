import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { getMuiTheme } from 'material-ui/styles';


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

    render() {



        const calculateLoginDate = () => {
            const day = 24 * 60 * 60 * 1000
            const now = new Date()
            const dayOne = now.getTime() - (now.getHours() * 60 * 60 * 1000 + now.getMinutes() * 60 * 1000 + now.getSeconds() * 1000 + now.getMilliseconds)

            const dayTwo = dayOne - day
            const dayThree = dayTwo - day
            const dayFour = dayThree - day
            const dayFive = dayFour - day
            const daySix = dayFive - day
            const daySeven = daySix - day

            return (console.log('dupa'))
        }

        const data = [
            {
                time: "Six day ago",
                users: 5,
            },
            {
                time: "Five day ago",
                users: 3,
            }, {
                time: "Four day ago",
                users: 7,
            }, {
                time: "Three day ago",
                users: 9,
            },
            {
                time: "Two day ago",
                users: 2,
            },
            {
                time: "Yesterday",
                users: 7,
            },
            {
                time: "Today",
                users: 8,
            }
        ]

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