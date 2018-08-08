import React from 'react'


class OursSurveysView extends React.Component {
    state = {
        survey: [{
            title: 'jeb z dzidy',
            text: 'Kacpeł i puchałke',
            id: Date.now(),
            isFavourite: false
        },
        {
            title: 'dupa',
            text: 'Prosiałke i puchałke',
            id: Date.now(),
            isFavourite: false
        },
        {
            title: '',
            text: '',
            id: Date.now(),
            isFavourite: false
        }]
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
export default OursSurveysView