import React, {Component} from "react";

require("./CreationQuizz.css");

class CreationQuizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": "",
            "questions": []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleItemClick = this.handleItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadFile = this.loadFile.bind(this);
    }

    handleSubmit = (e) => {
        console.log(this.state);
        alert('A quizz was submitted: ' + this.state.questions);
        e.preventDefault();
    };

    // handleItemClick = (elem) => {
    //     console.log(this.state);
    //     let doc = document.getElementsByClassName("active");
    //     doc[0].className = "item police";
    //     elem.target.className = "item active";
    //     console.log(elem.target);
    //
    //     if (elem.target.id !== 'g') {
    //         if (document.getElementById("gen").children[0]) {
    //             document.getElementById("gen").children[0].remove();
    //             document.getElementById("gen").children[0].remove();
    //             document.getElementById("gen").children[0].remove();
    //         }
    //         document.getElementById("description").setAttribute("value", this.state.questions[elem.target.id].question);
    //         document.getElementById("reponse1").setAttribute("value", this.state.questions[elem.target.id].reponses[0]);
    //         document.getElementById("reponse2").setAttribute("value", this.state.questions[elem.target.id].reponses[1]);
    //         document.getElementById("reponse3").setAttribute("value", this.state.questions[elem.target.id].reponses[2]);
    //         document.getElementById("reponse4").setAttribute("value", this.state.questions[elem.target.id].reponses[3]);
    //     } else {
    //         if (!document.getElementById("gen").children[0]) {
    //             let node = "<p className=\"ui segment\">Quizz Name</p>\n" +
    //                 "<div className=\"ui fluid icon input\">\n" +
    //                 "<input id=\"QuizzName\" type=\"text\" placeholder=\"QuizzName\" onChange={this.handleChange}/>\n" +
    //                 "</div>";
    //             document.getElementById("gen").innerHTML += node;
    //         }
    //     }
    // };

    loadFile = (event) => {
        let output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };


    handleChange(e) {
        let classGeneral = document.getElementById("g").className;
        // console.log(this.state);
        let hidden = document.getElementsByClassName("hidden");
        [...hidden].forEach((f)=>{
            if (!f.id) {
                f.className="column";
            }
        });
        let doc = document.getElementsByClassName("active");
        let id = doc[0].id;
        if (id ==='g') {id=0;}
        else {id = parseInt(id)+1}
        doc[0].className = "item police";
        let doc2 = document.getElementById(id);
        if(doc2) {
            doc2.className = "item active";
        }
        if (!doc2) {
            doc2 = document.getElementById(id-1);
            doc2.className = "item active";
            document.getElementById("next").remove();
            hidden[0].className="ui column";
            alert("aucune questions supplémentaires");
        }
        if (classGeneral !== 'item active') {
            let description = document.getElementById("description").value;
            let r1 = document.getElementById("reponse1").value;
            let r2 = document.getElementById("reponse2").value;
            let r3 = document.getElementById("reponse3").value;
            let r4 = document.getElementById("reponse4").value;
            let rs = [r1, r2, r3, r4];
            let questions = {
                description: description,
                reponses: rs
            };
            document.getElementById("description").value = "";
            document.getElementById("reponse1").value = "";
            document.getElementById("reponse2").value = "";
            document.getElementById("reponse3").value = "";
            document.getElementById("reponse4").value = "";
            this.setState({questions:this.state.questions.concat(questions)});
        }
        else {
            let name = document.getElementById("QuizzName").value;
            let image = document.getElementById("QuizzImage").files[0];
            console.log(image);
            if (document.getElementById("gen").children[0]) {
                document.getElementById("gen").children[0].remove();
                document.getElementById("gen").children[0].remove();
            }
            this.setState({title:name});
        }
    }

    render() {
        return (
            <form>
                <div className="list">
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="ui circular container">
                                <img className="ui centered small circular image police" id="output" alt="no image for this quizz"/>
                            </div>
                            <div className="ui vertical fluid tabular menu">
                                <p id="g" className="item active">
                                    General
                                </p>
                                <p id="0" className="item police">
                                    0
                                </p>
                                <p id="1" className="item police">
                                    1
                                </p>
                                <p id="2" className="item police">
                                    2
                                </p>
                            </div>
                            <div id="validate" className="ui column hidden">
                                <input className="ui button" type="submit" value="Enregistrer Quizz"
                                       onClick={this.handleSubmit}/>
                            </div>

                        </div>
                        <div className="eleven wide stretched column">
                            <div className="ui segment">
                                <div id="next" className="ui column">
                                    <a className="ui button"
                                       onClick={this.handleChange}>
                                        Valider
                                    </a>
                                </div>
                                <div id="gen" className="column">
                                    <p className="ui segment">Quizz Name</p>
                                    <div className="ui fluid icon input">
                                        <input id="QuizzName" type="text" placeholder="QuizzName"/>
                                        <input id="QuizzImage" type="file" onChange={this.loadFile}/>
                                    </div>
                                </div>
                                <div className="column hidden">
                                    <p className="ui segment">Description de la question</p>
                                    <div className="ui fluid icon input">
                                        <input id="description" type="text" placeholder="Description de la question"
                                        />
                                    </div>
                                </div>
                                <div className="column hidden">
                                    <p className="ui segment">Reponses</p>
                                    <div className="ui three column double grid">
                                        <div className="ui input column">
                                            <input id="reponse1" type="text" placeholder="Reponse 1 modif image"
                                            />
                                        </div>
                                        <div className="ui input column">
                                            <input id="reponse2" type="text" placeholder="Reponse 2"
                                            />
                                        </div>
                                        <div className="ui input column">
                                            <input id="reponse3" type="text" placeholder="Reponse 3"
                                            />
                                        </div>
                                        <div className="ui input column">
                                            <input id="reponse4" type="text" placeholder="Reponse 4"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default CreationQuizz;



