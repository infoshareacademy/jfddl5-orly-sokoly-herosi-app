import React from 'react'

import { ListItem, Divider } from 'material-ui'
import FavIcon from 'material-ui/svg-icons/action/favorite'
import FavIconBorder from 'material-ui/svg-icons/action/favorite-border'
import { Link } from 'react-router-dom'

import { database } from '../../firebaseConfig'


const SurveyItem = (props) => (
    <ListItem
        primaryText={
            <Link
                to={`/survey/${props.item.id}/${props.goBackLink}`}
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
        checked={props.item.isFavourite}
        rightIcon={
            <div
                onClick={() => {
                    props.toggleFav(props.item.id, props.item.isFavourite)
                }}
            >
                {
                    props.item.isFavourite === true ?
                        <FavIcon />
                        :
                        <FavIconBorder />
                }
            </div>
        }
    />
)

export default SurveyItem