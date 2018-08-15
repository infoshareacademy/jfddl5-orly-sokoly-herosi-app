import React from 'react'
import OSHPaper from '../../components/OSHPaper'
import Loading from '../../components/Loading'
import { connect } from 'react-redux';


const FillingInSurvey = (props) => {

    const surveyList = props._surveyList
    const id = props.match.params.id

    const survey = surveyList && surveyList.find(e => e.id === id)

    const questionArray = survey && survey.questions


    return (
        <OSHPaper>
            {
                survey ?
                    <div>
                        <h2>{survey.title} </h2>
                        <h3>Description: {survey.text}</h3>
                        {
                            console.log(questionArray)
                            questionArray.map()

                        }

                    </div>
                    :
                    <Loading />
            }

        </OSHPaper>
    );

}

const mapStateToProps = state => ({
    _surveyList: state.surveys.surveyList
})

export default connect(mapStateToProps, null)(FillingInSurvey)