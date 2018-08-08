import React from 'react'
import TextField from 'material-ui/TextField';
import SurveyItem from '../../components/SurveyItem'
import FloatingActionButton from 'material-ui/FloatingActionButton';

class OursSurveysView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            surveyList: [],
            numPage: ''
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

          const numberOfPages = Math.ceil(searchSurveyList.length/10)

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

                <ButtonPageMaker number={numberOfPages} />

            </div>

        </div>
        )
    }

}


const ButtonPageMaker = ({ number }) => {

    const styles = {
        color: 'white',
    };

    const emptyArray = Array(number).fill(null)

    const newArrayWithButtons = emptyArray
        .map((e, num) => (
            <FloatingActionButton
                mini={true}
                iconStyle={styles}
            >
                {num + 1}
            </FloatingActionButton>))

    return <div className="page-numbers">{newArrayWithButtons}</div>

}


export default OursSurveysView