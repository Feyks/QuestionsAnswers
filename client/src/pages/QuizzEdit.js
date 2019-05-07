import React, {Component} from "react";

require("./Style.css");

class QuizzEdit extends Component {
    render() {
        return (
            <div className="menuEdit">
                <div className="titreEdit">
                    <div className="ui center aligned raised very padded text container segment">
                        <h1 className="ui huge header">Edition d'un Quizz</h1>
                    </div>
                </div>

                <div className="ui two column stackable grid container">
                    <div className="column">
                        <button className="ui fluid massive center aligned right labeled icon button">
                            <i className="right arrow icon"></i>
                            Quizz n°1
                        </button>
                    </div>
                    <div className="column">
                        <button className="ui fluid massive center aligned right labeled icon button">
                            <i className="right arrow icon"></i>
                            Quizz n°2
                        </button>
                    </div>
                    <div className="column">
                        <button className="ui fluid massive center aligned right labeled icon button">
                            <i className="right arrow icon"></i>
                            Quizz n°3
                        </button>
                    </div>
                    <div className="column">
                        <button className="ui fluid massive center aligned right labeled icon button">
                            <i className="right arrow icon"></i>
                            Quizz n°4
                        </button>
                    </div>
                    <div className="column">
                        <button className="ui fluid massive center aligned right labeled icon button">
                            <i className="right arrow icon"></i>
                            Quizz n°5
                        </button>
                    </div>
                    <div className="column">
                        <button className="ui fluid massive  center aligned right labeled icon button">
                            <i className="right arrow icon"></i>
                            Quizz n°6
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizzEdit;
