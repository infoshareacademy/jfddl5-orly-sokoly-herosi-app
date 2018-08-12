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
                                />
                            )
                    }
                </div>
                <ButtonPageMaker
                    number={numberOfPages}
                    onChangeNumberPage={this.onChangeNumberPage}
                />
            </div>
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

    return <div className="button-page">{newArrayWithButtons}</div>
}

export default SurveyList