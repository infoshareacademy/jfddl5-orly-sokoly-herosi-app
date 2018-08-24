import React from 'react'
import AppBar from 'material-ui/AppBar'

import SideBar from './SideBar'

class Navigation extends React.Component {
    state = {
        isOpen: false
    }

    toggleHandler =()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
        <div>
            <AppBar
                title={`Survey App`}
                onLeftIconButtonClick={this.toggleHandler}
            />
            <SideBar 
            isSideBarOpen= {this.state.isOpen}
            toggleSideBar={this.toggleHandler}
            />
            {this.props.children}
        </div>
        )
    }
}

export default Navigation