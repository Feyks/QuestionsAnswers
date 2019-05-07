import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/Home.js";
import Quizz from "./pages/Quizz.js";
import Background from "./pages/black.jpg";

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    position: "absolute"
};

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <div style={sectionStyle }>
                  <Switch>
                      <Route exact={true} path="/" component={Home} />
                      <Route exact={true} path="/quizz" component={Quizz} />
                      <Route path="*" component={() => <p>Page Not Found</p>}/>
                  </Switch>
              </div>
          </BrowserRouter>
      )
  }
}
export default App;
