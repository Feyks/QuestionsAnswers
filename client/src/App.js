import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Quizz from "./pages/Quizz.js";
import QuizzEdit from "./pages/QuizzEdit.js";
import QuizzPlay from "./pages/QuizzPlay.js";
import Background from "./pages/black.jpg";
import CreationQuizz from "./pages/CreationQuizz.js";
import EditAQuizz from "./pages/EditAQuizz";

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
                  <Route path="/" component={Menu} />
                  <Switch>
                      <Route exact={true} path="/" component={Home} />
                      <Route exact={true} path="/quizz" component={Quizz} />
                      <Route exact={true} path="/quizz/create" component={CreationQuizz}/>
                      <Route exact={true} path="/quizz/:id/edit" component={EditAQuizz}/>
                      <Route exact={true} path="/quizz/edit" component={QuizzEdit} />
                      <Route exact={true} path="/quizz/play" component={QuizzPlay} />
                      <Route path="*" component={() => <p>Page Not Found</p>}/>
                  </Switch>
              </div>
          </BrowserRouter>
      )
  }
}
export default App;
