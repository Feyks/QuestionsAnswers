import React, {Component} from "react";
import QuizzReponse from "./QuizzReponse";
import axios from "axios";

require("./Style.css");

class QuizzPlay extends Component {

    state = {
        quizz: ""
    };


    componentDidMount() {
        axios.get('http://localhost:8081/quizz').then((response) => {
            document.getElementById("QuizzName").value = response.data[0].name;
            this.setState({
                quizz: response.data[0]
            })
        });
    }

    render() {
        return (
            <div className="menuPlay">
                <div>
                    <div className="ui center aligned raised very padded text container segment">
                        <p>
                            <h1 className="ui huge header">Nom du Quizz</h1>
                            {this.state.quizz.name}
                        </p>
                    </div>
                </div>
                <div className="btnPlay">
                    <a onClick={<QuizzReponse id={this.state.quizz._id}/>}>
                        <div className="ui massive animated button" tabIndex="0">
                            <div className="visible content">Démarrer le quizz</div>
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

export default QuizzPlay;