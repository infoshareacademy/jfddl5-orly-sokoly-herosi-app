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
            textAlign: 'center',
        },
        OSHPaper: {
            padding: '50px',
            margin: '50px auto',
            width: '800px'
        }, 
        buttons: {
            margin: '30px',
        }
    }

    const questions = survey && Object.entries(survey.questions)
        .map(([id, value]) => {
            return value
        })

    return (
        <OSHPaper styles={styles.OSHPaper}>
            {
                survey ?
                    <div>
                        <h1 className="final-view__header"> The survey you choose: </h1>
                        <h2>Title:</h2>
                        {survey.title}
                        <h3>Category:</h3>
                        {survey.category}
                        <h3>Description:</h3>
                        {survey.text}
                        <h3>Question list: </h3>
                        <ul>
                            {questions.map(e => <li>{e.questionText}</li>)}
                        </ul>
                        <div
                            style={styles.center}
                        >
                            <div style={styles.buttons}>
                                <RaisedButton
                                    primary={true}
                                    fullWidth={true}
                                    label="Generate public survey!"
                                    href={`/filling-in-survey/${props._uuid}/${id}`}
                                    target={'_blank'}
                                />
                            </div>
                            <div
                            style={styles.buttons}
                            >
                                <Link
                                    to={'/' + goBackLink}
                                >
                                    <RaisedButton
                                        fullWidth={true}
                                        secondary={true}
                                        label="Go to previous page"
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>
                    :
                    <Loading />
            }
        </OSHPaper>
    )
}

const mapStateToProps = state => ({
    _uuid: state.auth.user.uid,
    _surveyList: state.surveys.surveyList
})

export default connect(mapStateToProps, null)(FinalSurveyView)