import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import OSHPaper from '../../components/OSHPaper';
import Loading from '../../components/Loading'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';



const FinalSurveyView = (props) => {

    const surveyList = props._surveyList
    const id = props.match.params.id
    const goBackLink = props.match.params.goBackLink

    const survey = surveyList && surveyList.find(e => e.id === id)

    const styles = {
        center: {
            textAlign: 'center'
        }
    }

    return (
        <OSHPaper>
            {
                survey ?
                    <div>
                        <h1 className="final-view__header"> The survey you choose: </h1>
                        <div>Category: {survey.category} </div>
                        <h2>Title: {survey.title} </h2>
                        <h3>Description: {survey.text}</h3>
                        <RaisedButton
                            primary={true}
                            fullWidth={true}
                            label="Generate public survey!"
                            href={`/filling-in-survey/${id}`}
                        />
                        <div
                            style={styles.center}
                        >
                            <Link to={'/' + goBackLink} >Go to previous page </Link>
                        </div>

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