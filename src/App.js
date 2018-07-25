import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import OursSurveysView from './views/OursSurveysView'
import NewSurveyView from './views/NewSurveyView'
import FavouritesView from './views/FavouritesView'
import Dashboard from './views/Dashboard/Dashboard'
import Navigation from './Navigation'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>

            <Navigation />

            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/ours-surveys'} component={OursSurveysView} />
            <Route path={'/new-survey'} component={NewSurveyView} />
            <Route path={'/favourites'} component={FavouritesView} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
