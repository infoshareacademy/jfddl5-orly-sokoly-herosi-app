import React from 'react'

import { Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';

const SideBarItem = (props) => (

    <Link to={props.to}
        style={{ textDecoration: 'none' }}
    >
        <MenuItem>{props.label}</MenuItem>
    </Link>
)

export default SideBarItem