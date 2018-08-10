import React from 'react'

import Search from './Search'
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
            numerOfSurveysOnOnePage: 10,
            rangeArray: [],
            oldestSurveyTimestamp: 0,
            isFavourite: false
        }
    }

    componentDidMount() {
        database.ref('surveys')
            .on('value', snapshot => {
                const firebaseData = Object.entries(snapshot.val() || {}).map(([id, value]) => {
                    value.id = id
                    return value
                })
                this.setState({
                    surveyList: firebaseData,
                    oldestSurveyTimestamp: firebaseData.map(e => e.date).sort()[0]
                })
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

    onChangeRangeArrayHandler = (event) => {
        console.log(event)
        this.setState({ rangeArray: event })
    }

    // toggleFav = (id, isFavourite) => {
    //     database.ref(`surveys/${id}`).update({
    //         isFavourite: !isFavourite
    //     })
    // }



    render() {
        const searchSurveyList = this.state.surveyList
            .map(e => e)
            .filter(e => {
                return e.title.indexOf(this.state.searchValue) >= 0 ||
                    e.title.toUpperCase().indexOf(this.state.searchValue) >= 0 ||
                    e.title.toLowerCase().indexOf(this.state.searchValue) >= 0
            }).filter(e => (
               e.date >= this.state.rangeArray[0] &&
               e.date <= this.state.rangeArray[1]
            ))



        const numberOfPages = Math.ceil(searchSurveyList.length / this.state.numerOfSurveysOnOnePage)


        return (
            <OSHPaper>
                <div className="ours-surveys">
                    <h1 className="ours-surveys__header">Ours Surveys View</h1>

                    <Search
                        searchValue={this.state.searchValue}
                        onChangeSearchValue={this.onChangeSearchValue}

                        oldestSurveyTimestamp={this.state.oldestSurveyTimestamp}

                        onChangeRangeArrayHandler={this.onChangeRangeArrayHandler}
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