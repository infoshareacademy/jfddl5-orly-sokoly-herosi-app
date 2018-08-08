import React from 'react'
import TextField from 'material-ui/TextField';
import SurveyItem from '../../components/SurveyItem'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import OSHPaper from '../../components/OSHPaper'

class OursSurveysView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            surveyList: [],
            numberPage: 0,
            numerOfSurveysOnOnePage: 10
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

    onChangeNumberPage = (number) => {
        this.setState({
            numberPage: number
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

        const numberOfPages = Math.ceil(searchSurveyList.length / this.state.numerOfSurveysOnOnePage)

        return (
        <OSHPaper>
        <div className="view__ours-survey">
                <h1>Ours Surveys View</h1>

                <TextField
                    fullWidth={true}
                    hintText="Find the survey"
                    value={this.state.searchValue}
                    onChange={this.onChangeSearchValue}
                />

                {
                    searchSurveyList
                    .filter((item, index) => {

                        const numberPage = this.state.numberPage
                        const numerOfSurveysOnOnePage = this.state.numerOfSurveysOnOnePage

                       return index >= numberPage * numerOfSurveysOnOnePage &&
                        index <= ((numberPage + 1) * numerOfSurveysOnOnePage) - 1


                    })
                    .map(item =>

                        <SurveyItem
                            item={item}
                            key={item.id}
                        />
                    )
                }

                <ButtonPageMaker
                    number={numberOfPages}
                    onChangeNumberPage={this.onChangeNumberPage}
                />


        </div>
        </OSHPaper>
        )
    }

}


const ButtonPageMaker = ({ number, onChangeNumberPage }) => {

    const styles = {
        color: 'white',
    };

    const emptyArray = Array(number).fill(null)

    const newArrayWithButtons = emptyArray
        .map((e, num) => (
            <FloatingActionButton
                mini={true}
                iconStyle={styles}
                key={num}
                onClick={()=>onChangeNumberPage(num)}
            >
                {num + 1}
            </FloatingActionButton>))

    return <div className="page-numbers">{newArrayWithButtons}</div>

}


export default OursSurveysView