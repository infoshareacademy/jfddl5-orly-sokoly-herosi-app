import React from 'react'

import { ListItem } from 'material-ui'
import FavIcon from 'material-ui/svg-icons/action/favorite'
import FavIconBorder from 'material-ui/svg-icons/action/favorite-border'
import { Link } from 'react-router-dom'

import { database } from '../firebaseConfig'


const SurveyItem = (props) => {
    // const linkTitle = 

      const toggleFav = (id, isFavourite) => {
        database.ref(`surveys/${id}`).update({
            isFavourite: !isFavourite
        })
    }

    return (
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
        checked={props.item.isFavourite}
        rightIcon={
            props.item.isFavourite === true ?
                <FavIcon
                    onClick={() => {
                        toggleFav(props.item.id, props.item.isFavourite)

                    }}
                />
            :
            <FavIconBorder
            onClick={() => {
                toggleFav(props.item.id, props.item.isFavourite)
            }}

        />
            }
    />)
                }



export default SurveyItem