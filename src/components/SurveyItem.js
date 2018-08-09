import React from 'react'
import { ListItem } from 'material-ui'
import FavIcon from 'material-ui/svg-icons/action/favorite'
import FavIconBorder from 'material-ui/svg-icons/action/favorite-border'

const SurveyItem = (props) => (
    <ListItem
        primaryText={props.item.title}
        secondaryText={props.item.text}
        checked={props.item.isFavourite}
        rightIcon={
            props.item.isFavourite == true ?

                <FavIconBorder
                    onClick={() => {
                        props.toggleFav(props.item.id, props.item.isFavourite)
                    }}

                /> :
                <FavIcon
                    onClick={() => {
                        props.toggleFav(props.item.id, props.item.isFavourite)

                    }}
                />}
    />
)



export default SurveyItem