import React from 'react'
import { database } from '../../firebaseConfig'
import Loading from '../../components/Loading'
import OSHPaper from '../../components/OSHPaper';

class FinalSurveyView extends React.Component {

    state = {
        survey: null,
        isNotFound: false
    }

    componentDidMount() {

        const id = this.props.match.params.id

        database.ref(`/surveys/${id}`)
            .on('value', snapshot => {
                if (!snapshot.val()) {
                    this.setState({ isNotFound: true })
                    return
                }

                this.setState({ survey: snapshot.val() })
            })
    }

    componentWillUnmount() {
        const id = this.props.match.params.id
        database.ref(`surveys/:${id}`).off()
    }

    render() {
        return (
            <OSHPaper>
                <div>
                    {this.state.survey ?
                        <div>
                            <h1 className="final-view__header"> The survey you choose: </h1>
                            <h3>Survey Title: {this.state.survey.title} </h3>
                            <div>Survey Content: {this.state.survey.text}</div>
                            {/* <div>Survey Category: {this.state.survey.category} </div> */}
                        </div>
                        :
                        this.state.isNotFound ?
                            'Not found'
                            :
                            <Loading />}
                </div>
            </OSHPaper>
        )
    }
}


export default FinalSurveyView