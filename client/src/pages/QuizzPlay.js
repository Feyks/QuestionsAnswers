import React, {Component} from "react";

require("./Style.css");

class QuizzPlay extends Component {

    // state = {
    //     quizz: []
    // };
    //
    //
    // componentDidMount() {
    //     this.getData();
    //     this.setState({quizz: data});
    // }

    render() {
        return (
            <div className="menuPlay">
                <div className="DescriptionQuizz">
                    <div className="ui center aligned raised very padded text container segment">
                        <p>
                            <h1 className="ui huge header">Description du Quizz</h1>
                            {/*{this.state.quizz[]}*/}
                        </p>
                    </div>
                </div>
                <div className="btnPlay">
                    <a href="/quizz">
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