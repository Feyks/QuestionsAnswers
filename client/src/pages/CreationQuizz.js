import React, {Component} from "react";

require("./CreationQuizz.css");

class CreationQuizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
            stock: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        alert('A name was submitted: ' + this.state.activeItem);
        e.preventDefault();
    };
    handleItemClick = (elem) => {
        console.log(elem.target);
        if(elem.className)
        this.setState({stock: this.state.stock.concat(this.state.activeItem)});
        console.log(this.state.stock);
        let doc = document.getElementsByClassName("item active");
        if (doc) {
            doc[0].className="item";
        }
        console.log(document.getElementById("gen").className);
        if (elem.target.id === 'g') {
            document.getElementById("gen").className = document.getElementById("gen").className+" hidden";
        }
        console.log(document.getElementById("gen").className);
        elem.target.className="item active";

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
                                    <a id="1" className="item" onClick={this.handleItemClick}>
                                        1
                                    </a>
                                    <a id="2" className="item" onClick={this.handleItemClick}>
                                        2
                                    </a>
                                    <a id="3" className="item" onClick={this.handleItemClick}>
                                        3
                                    </a>
                                    <a id="+" className="item" onClick={this.handleItemClick}>
                                        +
                                    </a>
                                </div>
                            </div>
                            <div className="eleven wide stretched column">
                                <div className="ui segment">
                                    <div className="column">
                                        <div id="gen" className="ui input column">
                                            <input type="text" placeholder="QuizzName"/>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="ui segment input description">
                                            <input type="text" placeholder="Description de la question"/>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="ui one column stackable grid container">
                                            <div className="column">
                                                <div className="ui input column">
                                                    <input type="text" placeholder="R1"/>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="ui input column">
                                                    <input type="text" placeholder="R2"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <label>
                    <h1 id="11" className="">
                       0
                    </h1>
                    <h1 id="2" className="hidden">
                       coucou
                    </h1>
                    <input type="text" value={this.state.activeItem} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Next" onClick={this.handleItemClick}/>
            </form>
        );
    }
}

export default CreationQuizz;



