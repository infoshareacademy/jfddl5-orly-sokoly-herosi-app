import React from 'react'
import TextField from 'material-ui/TextField';
import { ListItem } from 'material-ui';

class OursSurveysView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            surveyList: null,
            surveyList2: [
                { title: 'Survey 1', text: 'text one', id: '123456' },
                { title: 'App 2', text: 'text two', id: '456777' },
                { title: 'Search lalala 3', text: 'text three', id: '567889' }
            ]
        }
    }

    componentWillMount() {
        fetch('https://survey-app-84f53.firebaseio.com/surveys.json')
            .then(response => response.json())
            .then(data => {

                const firebaseArray = Object.entries(data || [])
                const firebaseData = firebaseArray.map(([id, value]) => {
                    value.id = id
                    return value
                })

                this.setState({ surveyList: firebaseData })
                console.log(data)
            })
    }

    onChangeSearchValue = (event, value) => {
        this.setState({
            searchValue: value
        })
    }


    render() {

        const searchSurveyList = this.state.surveyList2
            .map(e => e)
            .filter(e => {
                return e.title.indexOf(this.state.searchValue) >= 0 ||
                    e.title.toUpperCase().indexOf(this.state.searchValue) >= 0 ||
                    e.title.toLowerCase().indexOf(this.state.searchValue) >= 0
            })

        return (<div className="view__ours-survey">


            <div>
                <h1>Ours Surveys View</h1>

                <TextField
                    fullWidth={true}
                    hintText="Find the survey"
                    value={this.state.searchValue}
                    onChange={this.onChangeSearchValue}
                />

                {
                    searchSurveyList.map(e =>

                        <ListItem
                            primaryText={e.title}
                            secondaryText={e.text}
                            id={e.id}
                        />

                    )
                }
            </div>

        </div>
        )
    }

}


export default OursSurveysView