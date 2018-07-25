import React from 'react'
import AppBar from 'material-ui/AppBar'

import SideBar from './SideBar'

class Navigation extends React.Component {
    state = {
        isOpen: true
    }

    toggleHandler =()=>{
        this.setState({isOpen: !this.state.isOpen})

    }

    render() {
        return(
        <div>
            <AppBar
                title={`Survey App`}
            />
            <SideBar 
            toggleSideBar={this.toggleHandler}
            />
        </div>
        )
    }
}

export default Navigation