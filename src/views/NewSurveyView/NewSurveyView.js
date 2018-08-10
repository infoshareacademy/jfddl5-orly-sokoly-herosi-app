import React from 'react'
import TextField from 'material-ui/TextField'
import OSHPaper from '../../components/OSHPaper'
import RaisedButton from 'material-ui/RaisedButton'

import Category from './Category'

const myApiUrl = 'https://survey-app-84f53.firebaseio.com/surveys'

class NewSurveyView extends React.Component {
    state = {
        title: '',
        text: '',
        category: 'People',
        isFavourite: false
    }

    createHandler = () => {
        const request = {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                text: this.state.text,
                category: this.state.category,
                isFavourite: this.state.isFavourite,
                date: Date.now()
            })
        }

        fetch(`${myApiUrl}.json`, request)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: '',
                    text: '',
                    category: '',
                })
            })
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

    render() {
        return (
            <div >
                <OSHPaper >
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
                        floatingLabelText="Content"
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
                    <RaisedButton
                        label="Create Survey"
                        fullWidth={true}
                        primary={true}
                        style={style}
                        onClick={this.createHandler}
                    />

                </OSHPaper>
            </div>
        )
    }


}
const style = {
    margin: 12,
};

export default NewSurveyView