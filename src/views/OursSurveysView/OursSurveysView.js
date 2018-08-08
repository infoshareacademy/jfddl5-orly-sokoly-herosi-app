import React from 'react'
import TextField from 'material-ui/TextField';
import SurveyItem from '../../components/SurveyItem'

class OursSurveysView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            surveyList: [],
        }
    }

    componentDidMount() {
        fetch('https://survey-app-84f53.firebaseio.com/surveys.json')
            .then(response => response.json())
            .then(data => {

                const firebaseArray = Object.entries(data || {})
                const firebaseData = firebaseArray.map(([id, value]) => {
                    value.id = id
                    return value
                })

                this.setState({ surveyList: firebaseData })
            })
    }

    onChangeSearchValue = (event, value) => {
        this.setState({
            searchValue: value
        })
    }


    render() {

        const searchSurveyList = this.state.surveyList
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
                    searchSurveyList.map(item =>

                        <SurveyItem
                            item={item}
                            key={item.id}
                        />
                    )
                }
                
            </div>

        </div>
        )
    }

}


export default OursSurveysView