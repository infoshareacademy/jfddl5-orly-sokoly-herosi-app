import React from 'react'
import TextField from 'material-ui/TextField'
import OSHPaper from '../../components/OSHPaper'
import RaisedButton from 'material-ui/RaisedButton'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux'
import { saveNewSurvey, titleChangeAction, textChangeAction, categoryChangeAction, questionChangeAction, addQuestionToSurveyAction } from '../../state/newSurvey'
import { setOpenAction } from '../../state/snackBar'

class NewSurveyView extends React.Component {

    createHandler = () => {
        this.props._saveNewSurvey()
            .then(() => this.props._setOpenAction())
            .catch((error) => {
                console.error('survey no added')
            })
    }

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
                        onChange={this.props._titleChangeAction}
                        value={this.props._title}
                    /><br />
                    < TextField
                        hintText="Enter contents survey"
                        floatingLabelText="Short describe"
                        fullWidth={true}
                        type="text"
                        name="text-field"
                        onChange={this.props._textChangeAction}
                        value={this.props._text}
                    />
                    <SelectField
                        fullWidth={true}
                        floatingLabelText="Survey category"
                        onChange={this.props._categoryChangeAction}
                        value={this.props._category}
                        
                    >
                        <MenuItem value={"People"} primaryText="People" />
                        <MenuItem value={"Research"} primaryText="Research" />
                        <MenuItem value={"Alkohols"} primaryText="Alkohols" />
                        <MenuItem value={"Hobby"} primaryText="Hobby" />
                        <MenuItem value={"Work"} primaryText="Work" />
                    </SelectField>
                </OSHPaper>
                <div>
                    {
                        this.props._questions.map((_question, i) => (
                            <OSHPaper>
                                <h4>Question: {i + 1}</h4>
                                <TextField
                                    value={this.props._questions[i].questionText}
                                    onChange={(event) => this.props._questionChangeAction(event, i)}
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
                            onClick={this.props._addQuestionToSurveyAction}
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
    marginBottom: 12,
};

const mapStateToProps = state => ({
    _title: state.newSurvey.title,
    _text: state.newSurvey.text,
    _category: state.newSurvey.category,
    _questions: state.newSurvey.questions
})

const mapDispatchToProps = dispatch => ({
    _saveNewSurvey: (newSurveyData, questions) => dispatch(saveNewSurvey(newSurveyData, questions)),
    _setOpenAction: () => dispatch(setOpenAction('New survey was added!')),
    _addQuestionToSurveyAction: () => dispatch(addQuestionToSurveyAction()),
    _titleChangeAction: (event) => dispatch(titleChangeAction(event.target.value)),
    _textChangeAction: (event) => dispatch(textChangeAction(event.target.value)),
    _categoryChangeAction: (event, i, value) => dispatch(categoryChangeAction(event.target.value, i, value)),
    _questionChangeAction: (event, i) => dispatch(questionChangeAction(event.target.value, i)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewSurveyView)