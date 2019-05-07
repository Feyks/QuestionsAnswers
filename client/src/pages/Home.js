import React, {Component} from "react";
import logo from './logo.png';
import logo2 from "./logo2.png";
require("./Style.css");

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img src={logo} className="logo"/>
                <div className="ui center aligned raised very padded text container segment">
                    <h1 className="ui huge header">BIENVENUE</h1>
                    <a href="/quizz">
                        <div className="ui massive animated button" tabIndex="0">
                            <div className="visible content">Commencer</div>
                            <div className="hidden content">
                                <i className="right arrow icon"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;

