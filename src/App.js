import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import OursSurveysView from './OursSurveysView'
import NewSurveyView from './NewSurveyView'
import FavouritesView from './FavouritesView'
import SideBar from './SideBar'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <AppBar
              title={`Survey App`}
            />
            <SideBar />
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
