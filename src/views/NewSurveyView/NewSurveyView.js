import React from 'react'
import TextField from 'material-ui/TextField'
import OSHPaper from '../../components/OSHPaper'
import RaisedButton from 'material-ui/RaisedButton'

import Category from './Category'

import { connect } from 'react-redux'
import { saveNewSurvey } from '../../state/surveys'
import { setOpenAction } from '../../state/snackBar'

class NewSurveyView extends React.Component {
    state = {
        title: '',
        text: '',
        category: 'People',
        isFavourite: false,
        questions: [
            { questionText: 'dupa' },
            { questionText: '' },
        ]
    }

    createHandler = () => {
        this.state.title !== '' &&
            this.state.text !== ''
            ?
            this.props._saveNewSurvey({
                title: this.state.title,
                text: this.state.text,
                category: this.state.category,
                isFavourite: this.state.isFavourite,
                date: Date.now()
            }).then(() => {
                this.setState({
                    title: '',
                    text: '',
                    category: 'People'
                })
                this.props._setOpenAction()
            })
            :
            null
    }

    titleChange = (event) => {
        const fieldTitle = event.target.value
        this.setState({
            title: fieldTitle
        });
    }
    textChange = (event) => {
        const fieldText = event.target.value
        this.setState({
            text: fieldText
        });
    }
    onCategoryChangeHandler = (event, index, value) => {
        const choosedCategory = value
        this.setState({
            category: choosedCategory
        });
    }

    addNewQuestion = () => this.setState({
        questions: this.state.questions.concat(
            { questionText: ''}
        )
    })

    onQuestionChangeHandler = (event, index) => this.setState({
        questions: this.state.questions.map((question, i) => (
            index === i ?
                {
                    ...question,
                    questionText: event.target.value
                }
                :
                question
        ))
    })

    render() {
        return (
            <div >
                <OSHPaper>
                    <h1>Create new survey</h1>
                    < TextField
                        hintText="Enter title"
                        floatingLabelText="Survey title"
                        fullWidth={true}
                        type="text"
                        name="title"
                        onChange={this.titleChange}
                        value={this.state.title}
                    /><br />
                    < TextField
                        hintText="Enter contents survey"
                        floatingLabelText="Short describe"
                        fullWidth={true}
                        type="text"
                        name="text-field"
                        onChange={this.textChange}
                        value={this.state.text}
                    />
                    <Category
                        onCategoryChangeHandler={this.onCategoryChangeHandler}
                        currentCategory={this.state.category}
                    />
                </OSHPaper>
                <div>
                    {
                        this.state.questions.map((question, i) => (
                            <OSHPaper>
                                <h4>{i}</h4>
                                <TextField
                                    value={question.questionText}
                                    onChange={(event) => this.onQuestionChangeHandler(event, i)}
                                    hintText="Enter question"
                                    floatingLabelText="Question"
                                    fullWidth={true}
                                    type="text"
                                    name="title"
                                />
                            </OSHPaper>
                        ))
                    }

                </div>
                <div>
                    <OSHPaper>
                        <RaisedButton
                            onClick={this.addNewQuestion}
                            label="Add next question"
                            fullWidth={true}
                            primary={true}
                            style={style}
                        />
                        <RaisedButton
                            label="Create Survey"
                            fullWidth={true}
                            secondary={true}
                            style={style}
                            onClick={this.createHandler}
                        />
                    </OSHPaper>
                </div>
            </div>
        )
    }


}
const style = {
    margin: 12,
};

const mapDispatchToProps = dispatch => ({
    _saveNewSurvey: newSurveyData => dispatch(saveNewSurvey(newSurveyData)),
    _setOpenAction: () => dispatch(setOpenAction('New survey was added!'))
})

export default connect(
    null,
    mapDispatchToProps
)(NewSurveyView)