import React from 'react'

import Search from './Search'
import OSHPaper from '../../components/OSHPaper'
import './oursSurveys.css'
import SurveyList from '../../components/SurveyList';
import Loading from '../../components/Loading';
import { connect } from 'react-redux'

class OursSurveysView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            rangeArray: [],
            category: 'All'
        }
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
        const oldestSurveyTimestamp = this.props._surveyList && this.props._surveyList.map(e => e.date).sort()[0]

        const searchSurveyList = this.props._surveyList && this.props._surveyList
            .map(e => e)
            .filter(e => {
                return e.title.indexOf(this.state.searchValue) >= 0 ||
                    e.title.toUpperCase().indexOf(this.state.searchValue) >= 0 ||
                    e.title.toLowerCase().indexOf(this.state.searchValue) >= 0
            }).filter(e => {
                if (this.state.category === 'All') { return e === e } else { return e.category === this.state.category }
            })
            .filter(e => (
                this.state.rangeArray.length === 0 ?
                    true
                    :
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

                        oldestSurveyTimestamp={oldestSurveyTimestamp}

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

const mapStateToProps = (state) => ({
    _surveyList: state.surveys.surveyList
})

const mapStateToDispatch = (dispatch) => ({

})

export default connect(mapStateToProps, mapStateToDispatch)(OursSurveysView)