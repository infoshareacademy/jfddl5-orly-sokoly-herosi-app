import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom' 
import AppBar from 'material-ui/AppBar'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <AppBar 
            title={`Survey App`}
          />
        </Router>
      </div>
    );
  }
}

export default App
