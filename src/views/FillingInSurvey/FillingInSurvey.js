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
    const OSHPaperStyles = {
            padding:'50px',
            margin: '50px',
        }
    
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
                        <div
                            key={e.id}
                        >
                            <h2>{e.question}</h2>
                            <TextField
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                                fullWidth={true}
                                value={this.state.answers[e.id] || ''}
                                onChange={(event) => this.onAnswerChanged(event, e.id)}
                                type={'text'}
                                floatingLabelText={'Write your answer'}
                            />
                        </div>
                    )
                })

        return (
            <OSHPaper
            styles={OSHPaperStyles}
            >
                {
                    survey ?
                        <div>
                            <h2>Title: {survey.title}</h2>
                            <h3>Description:</h3>
                            {survey.text}
                            {
                                questionsArray
                            }
                            <RaisedButton
                                primary={true}
                                fullWidth={true}
                                label="Send your answers!"
                                onClick={() => {
                                    this.props._pushAnswersAction(this.state.answers, this.props.match.params.id)
                                    this.setState({ answers: {} })
                                    this.props._setOpenAction()
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