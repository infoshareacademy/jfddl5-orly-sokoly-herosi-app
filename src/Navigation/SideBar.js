import React from 'react'
import Drawer from 'material-ui/Drawer';
import SideBarItem from './SideBarItem'


const SideBar = (props) => (
   <Drawer
        docked={false}
        open={props.isSideBarOpen}
        onRequestChange={props.toggleSideBar}
    >

       <SideBarItem 
            to='/dashboard'
            label='Dashboard'
            toggleSideBar={props.toggleSideBar}
       />

        <SideBarItem 
            to='/ours-surveys'
            label='Ours Surveys'
            toggleSideBar={props.toggleSideBar}
       />

        <SideBarItem 
            to='/new-survey'
            label='New Survey'
            toggleSideBar={props.toggleSideBar}
       />

        <SideBarItem 
            to='/favourites'
            label='Favourites'
            toggleSideBar={props.toggleSideBar}
       />
   </Drawer>
)

export default SideBar