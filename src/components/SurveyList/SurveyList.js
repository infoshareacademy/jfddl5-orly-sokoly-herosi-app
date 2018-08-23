import React from 'react'
import SurveyItem from './SurveyItem'
import './surveyList.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';

class SurveyList extends React.Component {

    state = {
        numberPage: 0,
        numerOfSurveysOnOnePage: 10,
    }

    onChangeNumberPage = (number) => {
        this.setState({
            numberPage: number
        })
    }

    render() {

        const surveysArray= this.props.surveysArray

        const numberOfPages = Math.ceil(surveysArray.length / this.state.numerOfSurveysOnOnePage)

        return (
            <div>
                <div className={'surveys-list'}>
                    {
                        surveysArray
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
                                    goBackLink={this.props.goBackLink}
                                    toggleFav={this.props.toggleFav}
                                />
                            )
                    }
                </div>
                <ButtonPageMaker
                    number={numberOfPages}
                    numberPage={this.state.numberPage}
                    onChangeNumberPage={this.onChangeNumberPage}
                />
            </div>
        )
    }
}

const ButtonPageMaker = ({ number, numberPage, onChangeNumberPage }) => {

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
                disabled={num === numberPage ? true : false}
            >
                {num + 1}
            </FloatingActionButton>))

    return <div className="button-page">{newArrayWithButtons}</div>
}

export default SurveyList