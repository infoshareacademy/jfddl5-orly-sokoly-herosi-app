import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import Dashboard from './views/Dashboard'
import OursSurveysView from './views/OursSurveysView'
import NewSurveyView from './views/NewSurveyView'
import FavouritesView from './views/FavouritesView'
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
            <Route path={'/'} exact component={Dashboard}/>
            <Route path={'/dashboard'} component={Dashboard}/>
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
