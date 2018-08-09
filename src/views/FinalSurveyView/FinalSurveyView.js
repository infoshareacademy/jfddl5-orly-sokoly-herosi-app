import React from 'react'
import firebaseConfig form '../firebaseConfig'

class FinalSiurveyView extends React.Component {

    state={
        survey: null
    }

componentDidMount() {




}


render() {
 return (   <div>
    <h2 className="final-view__header"> The survey you choose: </h2> 
    <div>Survey Title:</div>
    <div>Survey Content:</div>
    <div>Survey Category: </div>
 </div> )
}
}


export default FinalSiurveyView