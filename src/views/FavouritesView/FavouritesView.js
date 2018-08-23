import React from 'react'

import OSHPaper from '../../components/OSHPaper'
import SurveyList from '../../components/SurveyList';
import Loading from '../../components/Loading';

import { connect } from 'react-redux'
import { toggleFavAction } from '../../state/surveys'

const FavouriteView = (props) => {
    const favouriteSurveys = props._surveyList && props._surveyList.map(e => e).filter(e => e.isFavourite === true)

    return (
        <OSHPaper>
            <div className="favourite-surveys">
                <h1 className="favourite-surveys__header">Favourites Surveys</h1>
                {
                    favouriteSurveys ?
                        favouriteSurveys.length !== 0 ?
                            <SurveyList
                                surveysArray={favouriteSurveys}
                                goBackLink={'favourites'}
                                toggleFav={props._toggleFav}
                            />
                            :
                            <h2>There are no favourite surveys to show</h2>
                        :
                        <Loading />
                }
            </div>
        </OSHPaper>
    )
}

const mapStateToProps = (state) => ({
    _surveyList: state.surveys.surveyList
})

const mapStateToDispatch = (dispatch) => ({
    _toggleFav: (id, isFavourite) => dispatch(toggleFavAction(id, isFavourite))
})

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(FavouriteView)

