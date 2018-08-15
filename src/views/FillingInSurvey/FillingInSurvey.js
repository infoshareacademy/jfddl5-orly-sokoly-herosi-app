import React from 'react'
import OSHPaper from '../../components/OSHPaper'
import Loading from '../../components/Loading'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { setOpenAction } from '../../state/snackBar'

const FillingInSurvey = (props) => {

    const surveyList = props._surveyList
    const id = props.match.params.id

    const survey = surveyList && surveyList.find(e => e.id === id)

    const questionsObject = survey && survey.questions

    const questionsArray = questionsObject &&
        Object.entries(questionsObject)
            .map(([id, question]) => {
                let e = {}
                e.id = id
                e.question = question
                return e
            }).map(e => {
                return (
                    <OSHPaper>
                        <h2>{e.question}</h2>
                        <TextField 
                        type={'text'}
                        key={e.id}
                        floatingLabelText={'Write your answer'}
                        />
                    </OSHPaper>
                )
            })

    return (
        <OSHPaper>
            {
                survey ?
                    <div>
                        <h2>{survey.title} </h2>
                        <h3>Description: {survey.text}</h3>
                        {
                            questionsArray
                        }
                        <RaisedButton
                            primary={true}
                            fullWidth={true}
                            label="Send your answers!"
                            onClick={() => null }
                        />
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

const mapDispatchToProps = dispatch => ({
    // _saveAnswers: answersArray => dispatch(saveAnswers(answersArray)),
    _setOpenAction: () => dispatch(setOpenAction('Thank you for your time!'))
})

export default connect(mapStateToProps, mapDispatchToProps)(FillingInSurvey)