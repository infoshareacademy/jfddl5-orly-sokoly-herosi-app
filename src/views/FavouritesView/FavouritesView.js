import React from 'react'
import OSHPaper from '../../components/OSHPaper'
import { database } from '../../firebaseConfig'
import SurveyList from '../../components/SurveyList';

class FavouriteView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            surveyList: [],
            isFavourite: false
        }
    }

    componentDidMount() {
        database.ref('surveys')
            .on('value', snapshot => {
                const firebaseData = Object.entries(snapshot.val() || {}).map(([id, value]) => {
                    value.id = id
                    return value
                })
                this.setState({
                    surveyList: firebaseData,
                })
            })
    }

    componentWillUnmount() {
        database.ref('surveys').off()
    }


    render() {
        const favouriteSurveys = this.state.surveyList.map(e => e).filter(e => e.isFavourite === true)

        return (
            <OSHPaper>
                <div className="favourite-surveys">
                    <h1 className="favourite-surveys__header">Favourites Surveys</h1>
                    {
                        favouriteSurveys.length !== 0 ?
                            <SurveyList
                                surveysArray={favouriteSurveys}
                            />
                            :
                            <h2>There are no favourite surveys to show</h2>
                    }
                </div>
            </OSHPaper>
        )
    }

}

export default FavouriteView

