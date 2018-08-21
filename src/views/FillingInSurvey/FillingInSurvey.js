import React from 'react'
import OSHPaper from '../../components/OSHPaper'
import Loading from '../../components/Loading'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { setOpenAction } from '../../state/snackBar'
import { loadingSurvey, pushAnswersAction } from '../../state/answers'


class FillingInSurvey extends React.Component {
    state = {
        answers: {}
    }

    componentDidMount = () => {
        this.props._loadingSurvey(this.props.match.params.id)
    }

    onAnswerChanged = (event, questionId) => {
        this.setState({
            answers: {
                ...this.state.answers,
                [questionId]: event.target.value
            }
        })
    }

    render() {
        const survey = this.props._survey
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
                        <OSHPaper
                            key={e.id}
                        >
                            <h2>{e.question}</h2>
                            <TextField
                                value={this.state.answers[e.id] || ''}
                                onChange={(event) => this.onAnswerChanged(event, e.id)}
                                type={'text'}
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
                            <h2> {survey.title} </h2>
                            <h3>Description: {survey.text}</h3>
                            {
                                questionsArray
                            }
                            <RaisedButton
                                primary={true}
                                fullWidth={true}
                                label="Send your answers!"
                                onClick={() => { 
                                    this.props._pushAnswersAction(this.state.answers, this.props.match.params.id)
                                    this.setState({answers: {}})
                                }}
                            />
                        </div >
                        :
                        <Loading />
                }
            </OSHPaper >
        )
    }
}

const mapStateToProps = state => ({
    _survey: state.answers.survey
})

const mapDispatchToProps = dispatch => ({
    _loadingSurvey: (id) => dispatch(loadingSurvey(id)),
    _pushAnswersAction: (answers, surveyId) => dispatch(pushAnswersAction(answers, surveyId)),
    _setOpenAction: () => dispatch(setOpenAction('Thank you for your time!'))
})

export default connect(mapStateToProps, mapDispatchToProps)(FillingInSurvey)