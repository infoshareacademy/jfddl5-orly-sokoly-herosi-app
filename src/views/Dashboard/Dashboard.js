import React from 'react'
import OSHPaper from '../../components/OSHPaper'
import PieChart from './PieChart'
import ReCharts from './ReCharts'

const styles={
   // position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const Dashboard = () => (
    <OSHPaper
    
    >
        <PieChart
        style={styles}
        />
        <ReCharts 
        style={styles}
        />
    </OSHPaper>
)

export default Dashboard