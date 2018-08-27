import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Auth from "./Auth/Auth";
import OursSurveysView from "./views/OursSurveysView";
import NewSurveyView from "./views/NewSurveyView";
import FavouritesView from "./views/FavouritesView";
import Dashboard from "./views/Dashboard/Dashboard";
import Navigation from "./Navigation";
import FinalSurveyView from "./views/FinalSurveyView";
import SnackBar from "./components/SnackBar";
import FillingInSurvey from "./views/FillingInSurvey";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path={"/"} exact component={withAuthAndNavigation(Dashboard)} />

            <Route
              path={"/dashboard"}
              component={withAuthAndNavigation(Dashboard)}
            />

            <Route
              path={"/ours-surveys"}
              component={withAuthAndNavigation(OursSurveysView)}
            />

            <Route
              path={"/new-survey"}
              component={withAuthAndNavigation(NewSurveyView)}
            />
            <Route
              path={"/favourites"}
              component={withAuthAndNavigation(FavouritesView)}
            />
            <Route
              path={"/survey/:id/:goBackLink"}
              component={withAuthAndNavigation(FinalSurveyView)}
            />

            <Route path={"/filling-in-survey/:uuid/:id"} component={FillingInSurvey} />
          </div>
        </Router>

        <SnackBar />
      </div>
    );
  }
}

const withAuthAndNavigation = Component => props => (
  <Auth>
    <Navigation>
      <Component {...props} />
    </Navigation>
  </Auth>
);

export default App;
