import React from 'react'
import Drawer from 'material-ui/Drawer';
import SideBarItem from './SideBarItem'

const SideBar = () => (
   <Drawer
       open={true}>

       <SideBarItem 
            to='/dashboard'
            label='Dashboard'
       />

        <SideBarItem 
            to='/ours-surveys'
            label='Ours Surveys'
       />

        <SideBarItem 
            to='/new-survey'
            label='New Survey'
       />

        <SideBarItem 
            to='/favourites'
            label='Favourites'
       />
   </Drawer>
)

export default SideBar