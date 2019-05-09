import React, {Component} from "react";

require("./Style.css");

class QuizzReponse extends Component {

    constructor() {
        super();
        this.setState({
            id: this.props.id,
            reponse: []
        })
    }

    render() {
        return (
            <div className="menuPlay">
                <div>
                    <div className="ui center aligned raised very padded text container segment">
                        <p>
                            <h1 className="ui huge header">Question n°1</h1>
                        </p>
                    </div>
                </div>
                <div className="ui two column vertical divided grid buttons">
                    <div className="ui container">
                        <button className="ui massive button espace1">La réponse une</button>
                    </div>
                    <div className="ui container">
                        <button className="ui massive button espace">La réponse deux</button>
                    </div>
                    <div className="ui container">
                        <button className="ui massive button espace">La réponse trois</button>
                    </div>
                    <div className="ui container">
                        <button className="ui massive button espace">La réponse quatre</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizzReponse;