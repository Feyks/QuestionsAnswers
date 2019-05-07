import React, {Component} from "react";
require("./Style.css");


class Quizz extends Component {
    render() {
        return (
            <div className="quizz">
                <div className="recherche">
                    <div className="ui massive action input">
                        <input type="text" placeholder="Rechercher..."></input>
                            <div className="ui button">Rechercher</div>
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

export default Quizz;