import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import OursSurveysView from './views/OursSurveysView'
import NewSurveyView from './views/NewSurveyView'
import FavouritesView from './views/FavouritesView'
import Dashboard from './views/Dashboard/Dashboard'
import Navigation from './Navigation'
import FinalSurveyView from './views/FinalSurveyView';
import SnackBar from './components/SnackBar'
import Auth from './components/Auth'

class App extends React.Component {


  render() {
    return (
      <div>
        <Auth>
        <Router>
          <div>

            <Navigation />

            <Route path={'/'} exact component={Dashboard} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/ours-surveys'} component={OursSurveysView} />
            <Route path={'/new-survey'} component={NewSurveyView} />
            <Route path={'/favourites'} component={FavouritesView} />
            <Route path={'/survey/:id'} component={FinalSurveyView} />
          </div>
        </Router>

        <SnackBar  />
        </Auth>
      </div>
    );
  }
}

export default App
