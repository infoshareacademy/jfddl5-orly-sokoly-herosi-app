import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import OursSurveyView from './NewSurveyView'
import NewSurveyView from './NewSurveyView'
import FavouritesView from './FavouritesView'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <AppBar
              title={`Survey App`}
            />
            <Route path={'/ours-survey'} component={OursSurveyView} />
            <Route path={'/new-survey'} component={NewSurveyView} />
            <Route path={'/favourites'} component={FavouritesView} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
