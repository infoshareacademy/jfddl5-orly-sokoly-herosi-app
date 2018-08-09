import React from 'react'
import TextField from 'material-ui/TextField';
import SurveyItem from '../../components/SurveyItem'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import OSHPaper from '../../components/OSHPaper'
import './oursSurveys.css'
import { database } from '../../firebaseConfig'

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
        database.ref('surveys')
            .on('value', snapshot => {
                const firebaseData = Object.entries(snapshot.val() || {}).map(([id, value]) => {
                    value.id = id
                    return value
                })
                this.setState({ surveyList: firebaseData })
            })
    }

    componentWillUnmount() {
        database.ref('surveys').off()
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
                <div className="ours-surveys">
                    <h1 className="ours-surveys__header">Ours Surveys View</h1>

                    <TextField
                        className={'ours-surveys__searcher-form'}
                        fullWidth={true}
                        hintText="Find the survey"
                        value={this.state.searchValue}
                        onChange={this.onChangeSearchValue}
                    />
                    <div className={'ours-surveys__surveys-list'}>
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

                    </div>
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
                onClick={() => onChangeNumberPage(num)}
            >
                {num + 1}
            </FloatingActionButton>))

    return <div className="ours-surveys__button-page">{newArrayWithButtons}</div>

}


export default OursSurveysView