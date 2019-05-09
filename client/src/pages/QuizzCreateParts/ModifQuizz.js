import React, {Component} from "react";
import Menu from "./MenuQuestion";
import Reponses from "./ReponseForm";

class ModifQuizz extends Component {
    render() {
        return (
            <form>
                <div className="list">
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="ui circular container">
                                <img className="ui centered small circular image police" id="output"
                                     alt="no image for this quizz"/>
                            </div>
                            <Menu/>
                            <div id="next" className="ui column">
                                <a className="ui button"
                                   onClick={this.props.handleChange}>
                                    Valider
                                </a>
                            </div>
                            <div id="validate" className="ui column hiden">
                                <input className="ui button" type="submit" value="Enregistrer Quizz"
                                       onClick={this.props.handleSubmit}/>
                            </div>

                        </div>
                        <div className="eleven wide stretched column">
                            <div className="ui segment">
                                <div id="gen" className="column">
                                    <p className="ui segment">Quizz Name</p>
                                    <div className="ui fluid icon input">
                                        <div className="ui label">Name</div>
                                        <input id="QuizzName" type="text" placeholder="QuizzName"/>
                                    </div>
                                    <div className="ui fluid icon input">
                                        <div className="ui label">Image</div>
                                        <input id="QuizzImage" type="file" onChange={this.props.loadFile}/>
                                    </div>
                                </div>
                                <div className="column hiden">
                                    <p className="ui segment">Description de la question</p>
                                    <div className="ui fluid icon input">
                                        <input id="description" type="text" placeholder="Description de la question"
                                        />
                                    </div>
                                </div>
                                <Reponses loadFile={this.props.loadFile}/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ModifQuizz;