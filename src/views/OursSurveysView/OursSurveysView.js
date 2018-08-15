import React from 'react'

import Search from './Search'
import OSHPaper from '../../components/OSHPaper'
import './oursSurveys.css'
import { database } from '../../firebaseConfig'
import SurveyList from '../../components/SurveyList';
import Loading from '../../components/Loading';

class OursSurveysView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            surveyList: null,
            rangeArray: [],
            oldestSurveyTimestamp: 0,
            isFavourite: false,
            category: 'All'
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

    onCategoryChangeHandler = (event, index, value) => {
        const choosedCategory = value
        this.setState({
            category: choosedCategory
        });
    }


    render() {
        const searchSurveyList = this.state.surveyList && this.state.surveyList
            .map(e => e)
            .filter(e => {
                return e.title.indexOf(this.state.searchValue) >= 0 ||
                    e.title.toUpperCase().indexOf(this.state.searchValue) >= 0 ||
                    e.title.toLowerCase().indexOf(this.state.searchValue) >= 0
            }).filter(e => {
                if (this.state.category === 'All') { return e === e } else { return e.category === this.state.category }
            })
            .filter(e => (
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
                        rangeArray={this.state.rangeArray}

                        onCategoryChangeHandler={this.onCategoryChangeHandler}
                        currentCategory={this.state.category}
                    />

                    {
                        searchSurveyList ?
                            searchSurveyList.length !== 0 ?
                                <SurveyList
                                    surveysArray={searchSurveyList}
                                    goBackLink={'ours-surveys'}
                                />
                                :
                                <h2>There are no surveys to show</h2>
                            :
                            <Loading />
                    }
                </div>
            </OSHPaper>
        )
    }

}



export default OursSurveysView