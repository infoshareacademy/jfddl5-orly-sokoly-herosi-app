import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import OursSurveysView from './views/OursSurveysView'
import NewSurveyView from './views/NewSurveyView'
import FavouritesView from './views/FavouritesView'
import Dashboard from './views/Dashboard/Dashboard'
import Navigation from './Navigation'
import FinalSurveyView from './views/FinalSurveyView';
import SnackBar from './components/SnackBar'
import FillingInSurvey from './views/FillingInSurvey';

class App extends React.Component {


  render() {
    return (
      <div>
        <Router>
          <div>



            <Route path={'/'} exact component={withNavigation(Dashboard)} />
            <Route path={'/dashboard'} component={withNavigation(Dashboard)} />
            <Route path={'/ours-surveys'} component={withNavigation(OursSurveysView)} />
            <Route path={'/new-survey'} component={withNavigation(NewSurveyView)} />
            <Route path={'/favourites'} component={withNavigation(FavouritesView)} />
            <Route path={'/survey/:id/:goBackLink'} component={withNavigation(FinalSurveyView)} />

            <Route path={'/filling-in-survey/:id'} component={FillingInSurvey} />
          </div>
        </Router>

        <SnackBar />
      </div>
    );
  }
}

const withNavigation = Component => (props) => (
  <Navigation>
    <Component {...props}/>
  </Navigation>
)

export default App
