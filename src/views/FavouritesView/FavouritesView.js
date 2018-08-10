import React from 'react'
import mapObjectToArray from '../../utils/mapObjectToArray'
import SurveyItem from '../../components/SurveyItem'

class FavouritesView extends React.Component {

    state = {
        surveys: null
    }

    componentDidMount() {
        fetch('https://survey-app-84f53.firebaseio.com/surveys/.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    surveys: mapObjectToArray(data)
                })
            })
    }


    render() {

        const filteredSuveys = this.state.surveys && this.state.surveys.filter(element => element.isFavourite === true)
            .map(item =>

                <SurveyItem
                    item={item}
                    key={item.id}
                />
            )

        return (
            <div>
                {filteredSuveys}
            </div>

        )
    }
}


export default FavouritesView