import React from 'react'

import Search from './Search'
import OSHPaper from '../../components/OSHPaper'
import './oursSurveys.css'
import { database } from '../../firebaseConfig'
import SurveyList from '../../components/SurveyList';

class OursSurveysView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            surveyList: [],
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

    onChangeRangeArrayHandler = (event) => {
        this.setState({ rangeArray: event })
    }

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

                    <SurveyList 
                        surveysArray={searchSurveyList}
                    />

                    </div>
            </OSHPaper>
                )
            }
        
        }
        
        
        
export default OursSurveysView