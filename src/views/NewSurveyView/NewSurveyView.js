import React from 'react'
import TextField from 'material-ui/TextField'
import OSHPaper from '../../components/OSHPaper'
import RaisedButton from 'material-ui/RaisedButton'

import Category from './Category'

import { connect } from 'react-redux'
import { saveNewSurvey, titleChangeAction, textChangeAction, categoryChangeAction, questionChangeAction, createSurveyAction, addQuestionToSurveyAction } from '../../state/newSurvey'
import { setOpenAction } from '../../state/snackBar'

class NewSurveyView extends React.Component {


    createHandler = () => {
        // this.state.title !== '' &&
        //     this.state.text !== ''
        //     ?
        //     this.props._saveNewSurvey({
        //         title: this.state.title,
        //         text: this.state.text,
        //         category: this.state.category,
        //         isFavourite: this.state.isFavourite,
        //         date: Date.now()
        //     }, this.state.questions)
        //         .then(() => {
        //             this.setState({
        //                 title: '',
        //                 text: '',
        //                 category: 'People'
        //             })
        //             this.props._setOpenAction()
        //         })
        //         .catch(()=>{
        //             // TODO
        //         })
        //     :
        //     null
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
                    <Category
                        onCategoryChangeHandler={this.props._categoryChangeAction}
                        currentCategory={this.props._category}
                    />
                </OSHPaper>
                <div>
                    {
                        this.props._questions.map((_question, i) => (
                            <OSHPaper>
                                <h4>Question: {i + 1}</h4>
                                <TextField
                                    value={this.props._questions[i].questionText}
                                    onChange={(event) => this.props._questionChangeAction(event, i)}
                                    //hintText="Enter question"
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
                            onClick={this.props._createSurveyAction}
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
    _createSurveyAction: (newSurveyData) => dispatch(createSurveyAction(newSurveyData)),
    _addQuestionToSurveyAction: () => dispatch(addQuestionToSurveyAction()),
    _titleChangeAction: (event) => dispatch(titleChangeAction(event.target.value)),
    _textChangeAction: (event) => dispatch(textChangeAction(event.target.value)),
    _categoryChangeAction: (event) => dispatch(categoryChangeAction(event.target.value)),
    _questionChangeAction: (event,  i) => dispatch(questionChangeAction(event.target.value,  i)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewSurveyView)