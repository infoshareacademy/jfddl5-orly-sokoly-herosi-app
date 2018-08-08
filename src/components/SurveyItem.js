import React from 'react'
import { ListItem } from 'material-ui';

const SurveyItem = (props) => (
    <ListItem
        primaryText={props.item.title}
        secondaryText={props.item.text}
    />
)



export default SurveyItem