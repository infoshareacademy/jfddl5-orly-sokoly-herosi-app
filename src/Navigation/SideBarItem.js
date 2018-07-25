import React from 'react'

import { Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';

const SideBarItem = (props) => (

    <Link to={props.to}
        style={{ 
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 'bold'
        }}
    >
        <MenuItem onClick={props.toggleSideBar}>{props.label}</MenuItem>
    </Link>
)

export default SideBarItem