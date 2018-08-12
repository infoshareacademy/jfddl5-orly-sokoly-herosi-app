import React from 'react'

import SurveyItem from '../../components/SurveyItem'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import OSHPaper from '../../components/OSHPaper'
import '../OursSurveysView/oursSurveys.css'
import { database } from '../../firebaseConfig'

class FavouriteView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            surveyList: [],
            numberPage: 0,
            numerOfSurveysOnOnePage: 10,
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
                })
            })
    }

    componentWillUnmount() {
        database.ref('surveys').off()
    }


    onChangeNumberPage = (number) => {
        this.setState({
            numberPage: number
        })
    }

    render() {
        const favouriteSurveys = this.state.surveyList.map(e => e).filter(e => e.isFavourite === true)



        const numberOfPages = Math.ceil(favouriteSurveys.length / this.state.numerOfSurveysOnOnePage)


        return (
            <OSHPaper>
                <div className="ours-surveys">
                    <h1 className="ours-surveys__header">Favourites Surveys</h1>

                    <div className={'ours-surveys__surveys-list'}>
                        {
                            favouriteSurveys
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


export default FavouriteView