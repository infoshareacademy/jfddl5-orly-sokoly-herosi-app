import React from 'react';
import OSHPaper from '../../components/OSHPaper';
import Loading from '../../components/Loading'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

const FinalSurveyView = (props) => {

    const surveyList = props._surveyList
    const id = props.match.params.id
    const goBackLink = props.match.params.goBackLink

    const survey = surveyList && surveyList.find(e => e.id === id)

    return (
        <OSHPaper>
            {
                survey ?
                    <div>
                        <h1 className="final-view__header"> The survey you choose: </h1>
                        <h2>Title: {survey.title} </h2>
                        <h3>Description: {survey.text}</h3>
                        <div>Category: {survey.category} </div>
                    
                    <Link to={'/'+goBackLink} >Go to previous page </Link>
                    
                    </div>
                    :
                    <Loading />
            }
        </OSHPaper>
    )
}

const mapStateToProps = state => ({
    _surveyList: state.surveys.surveyList
})

export default connect(mapStateToProps, null)(FinalSurveyView)