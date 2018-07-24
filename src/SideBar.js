import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom'

const SideBar = () => (
   <Drawer
       open={true}>
        <Link to={'/ours-surveys'}
           style={{ textDecoration: 'none' }}
       >
           <MenuItem>
               Ours Surveys
           </MenuItem>
       </Link>
       <Link to={'/new-survey'}
           style={{ textDecoration: 'none' }}
       >
           <MenuItem>
               New Survey
           </MenuItem>
       </Link>
       <Link to={'/favourites'}
           style={{ textDecoration: 'none' }}
       >
           <MenuItem>
               Favourites
           </MenuItem>
       </Link>
   </Drawer>
)


export default SideBar