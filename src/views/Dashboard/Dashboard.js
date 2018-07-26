import React from 'react'
import OSHPaper from '../../components/OSHPaper'
import PieChart from './PieChart'
import ReCharts from './ReCharts'


const Dashboard = () => (
    <OSHPaper>
        <PieChart/>
        <ReCharts />
    </OSHPaper>
)

export default Dashboard