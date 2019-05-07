import React, {Component} from "react";

require("./CreationQuizz.css");

class CreationQuizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
            stock: {
                "title": "",
                "data": [
                    {
                        "question": "",
                        "reponses": []
                    }
                ]
            }
        }
        ;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        alert('A name was submitted: ' + this.state.stock);
        e.preventDefault();
    };

    handleItemClick = (elem) => {
        let doc = document.getElementsByClassName("active");
        doc[0].className = "item police";
        elem.target.className = "item active";
        console.log(elem.target);
        if (elem.className)
            this.setState({stock: this.state.stock.concat(this.state.activeItem)});
        console.log(this.state.stock);

        if (elem.target.id !== 'g') {
            if (document.getElementById("gen")) {
                document.getElementById("gen").remove();
            }
        }
    };

    handleChange(e) {
        this.setState({activeItem: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="list">
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="ui vertical fluid tabular menu">
                                <a id="g" className="item active" onClick={this.handleItemClick}>
                                    General
                                </a>
                                <a id="1" className="police item" onClick={this.handleItemClick}>
                                    1
                                </a>
                                <a id="2" className="item police" onClick={this.handleItemClick}>
                                    2
                                </a>
                                <a id="3" className="item police" onClick={this.handleItemClick}>
                                    3
                                </a>
                            </div>
                            <a id="+Q" className="ui button">
                                + //modif
                            </a>
                        </div>
                        <div className="eleven wide stretched column">
                            <div className="ui segment">
                                <div id="gen" className="column">
                                    <p className="ui segment">Quizz Name</p>
                                    <div className="ui fluid icon input">
                                        <input type="text" placeholder="QuizzName"/>
                                    </div>
                                </div>
                                <div className="column">
                                    <p className="ui segment">Description de la question</p>
                                    <div className="ui fluid icon input">
                                        <input type="text" placeholder="Description de la question"/>
                                    </div>
                                </div>
                                <div className="column">
                                    <p className="ui segment">Reponses</p>
                                    <div className="ui three column double grid">
                                        <div className="ui input column">
                                            <input type="text" placeholder="Reponse 1 modif image"/>
                                        </div>
                                        <div className="ui input column">
                                            <input type="text" placeholder="Reponse 2"/>
                                        </div>
                                        <div className="ui input column">
                                            <input type="text" placeholder="Reponse 3"/>
                                        </div>
                                        <div className="ui input column">
                                            <input type="text" placeholder="Reponse 4"/>
                                        </div>
                                        <div className="ui column">
                                            <a id="+R" className="ui button">
                                                Valider Quizz Complet //modif
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <label>
                    <h1
                        id="11"
                        className="">
                        0
                    </h1>
                    <h1 id="2" className="hidden">
                        coucou
                    </h1>
                    <input
                        type="text"
                        value={this.state.activeItem}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Next" onClick={this.handleItemClick}/>
            </form>
        );
    }
}

export default CreationQuizz;



