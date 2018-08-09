import React from 'react'
import { ListItem } from 'material-ui';
import { Link } from 'react-router-dom'

const SurveyItem = (props) => (
    // const linkTitle = 

    <ListItem
        primaryText={
            <Link
                to={`/survey/${props.item.id}`}
                style={{ 
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black'
                }}
            >
                {props.item.title}
            </Link>
        }
        secondaryText={props.item.text}
    />
)



export default SurveyItem