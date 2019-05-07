import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import CreationQuizz from "./pages/CreationQuizz.js";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact={true} path="/quizz/create" component={CreationQuizz}/>
                        <Route path="*" component={() => <p>Page Not Found</p>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
