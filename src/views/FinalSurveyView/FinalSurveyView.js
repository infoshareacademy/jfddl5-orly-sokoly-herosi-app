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
            console.log(value, id)
            return value =id
        })
    const answers = survey && Object.entries(survey.answers)
        .map(([id, value]) => {
            console.log('value', value)
            return value
        })

    // const question = questions.map((e, i)=>e.questionText[i])


    // const answer = answer.map()




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
                        <ol>
                            {questions.map(e => <li>{e.questionText}</li>)}
                        </ol>
                        <div
                            style={styles.center}
                        >
                            <div style={styles.buttons}>
                                <RaisedButton
                                    primary={true}
                                    fullWidth={true}
                                    label="Generate public survey!"
                                    href={`/filling-in-survey/${id}`}
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
                            <div>
                                <p> Answers:</p>
                                <ul>
                                    {questions.map((e, id) => <li>{e.questionText}+{answers.map(e => <li>{e.answer}</li>)} </li>
                                    )}
                                </ul>
                                {/* <ul>
                            {answers.map(e => <li>{e.answer}</li>)}
                        </ul> */}





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
    _surveyList: state.surveys.surveyList
})

export default connect(mapStateToProps, null)(FinalSurveyView)