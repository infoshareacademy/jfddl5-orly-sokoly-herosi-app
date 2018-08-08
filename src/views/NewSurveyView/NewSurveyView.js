import React from 'react'

const myApiUrl = 'https://survey-app-84f53.firebaseio.com/surveys'

class NewSurveyView extends React.Component {
    state = {
        title: '',
        text: ''
    }

    createHandler = () => {
        const request = {
          method: 'POST',
          body: JSON.stringify({
            title: this.state.title,
            text: this.state.text,
          })
        }
        fetch(`${myApiUrl}.json`, request)
          .then(response => response.json())
          .then(data => {
            this.setState({
              title: '',
              text: '',              
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


    render() {
        return (
            <div>
                Title:<input type="text" name="title" onChange={this.titleChange} value={this.state.title} />
                Your text:<input type="text" name="text-field" onChange={this.textChange} value={this.state.text} />
                <button onClick={this.createHandler}>Create</button>
            </div>
        )
    }


}

export default NewSurveyView