import React, {Component} from "react";

class MenuQuestion extends Component {
    constructor(props) {
        super(props);

        this.TypeInput = this.TypeInput.bind(this);
    }

    TypeInput = (event) => {
        let input;
        switch (event.target.parentElement.id) {
            case "ir1":
                input = document.getElementById("reponse1");
                break;
            case "ir2":
                input = document.getElementById("reponse2");
                break;
            case "ir3":
                input = document.getElementById("reponse3");
                break;
            case "ir4":
                input = document.getElementById("reponse4");
                break;
        }
        input.type = event.target.innerText;
    };

    render() {
        return (
            <div className="column hiden">
                <p className="ui segment">Reponses</p>
                <div className="ui three column centered double grid">
                    <div className="ui input column">
                        <img id="reponse 1" className="ui tiny circular image"/>
                        <input id="reponse1" type="text" onChange={this.props.loadFile} placeholder=""/>
                        <div className="ui checkbox">
                            <input id="br1" type="checkbox" tabIndex="0"/>
                            <label>Bonne réponse</label>
                        </div>
                        <div className="ui simple dropdown item">
                            <i className="dropdown icon">Type</i>
                            <div id="ir1" className="menu">
                                <div className="item" onClick={this.TypeInput}>text</div>
                                <div className="item" onClick={this.TypeInput}>file</div>
                            </div>
                        </div>
                    </div>
                    <div className="ui input column">
                        <img id="reponse 2" className="ui tiny circular image"/>
                        <input id="reponse2" type="text" onChange={this.props.loadFile} placeholder=""/>
                        <div className="ui checkbox">
                            <input id="br2" type="checkbox" tabIndex="0"/>
                            <label>Bonne réponse</label>
                        </div>
                        <div className="ui simple dropdown item">
                            <i className="dropdown icon">Type</i>
                            <div id="ir2" className="menu">
                                <div className="item" onClick={this.TypeInput}>text</div>
                                <div className="item" onClick={this.TypeInput}>file</div>
                            </div>
                        </div>
                    </div>
                    <div className="ui input column">
                        <img id="reponse 3" className="ui tiny circular image"/>
                        <input id="reponse3" type="text" onChange={this.props.loadFile} placeholder=""/>
                        <div className="ui checkbox">
                            <input id="br3" type="checkbox" tabIndex="0"/>
                            <label>Bonne réponse</label>
                        </div>
                        <div className="ui simple dropdown item">
                            <i className="dropdown icon">Type</i>
                            <div id="ir3" className="menu">
                                <div className="item" onClick={this.TypeInput}>text</div>
                                <div className="item" onClick={this.TypeInput}>file</div>
                            </div>
                        </div>
                    </div>
                    <div className="ui input column">
                        <img id="reponse 4" className="ui tiny circular image"/>
                        <input id="reponse4" type="text" onChange={this.props.loadFile} placeholder=""/>
                        <div className="ui checkbox">
                            <input id="br4" type="checkbox" tabIndex="0"/>
                            <label>Bonne réponse</label>
                        </div>
                        <div className="ui simple dropdown item">
                            <i className="dropdown icon">Type</i>
                            <div id="ir4" className="menu">
                                <div className="item" onClick={this.TypeInput}>text</div>
                                <div className="item" onClick={this.TypeInput}>file</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuQuestion;