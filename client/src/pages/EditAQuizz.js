import React, {Component} from "react";
import axios from "axios";
import ModifQuizz from "./QuizzCreateParts/ModifQuizz";

require("./CreationQuizz.css");

class EditAQuizz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "quizz": "",
            "name": "",
            "icone": "",
            "questions": []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loadFile = this.loadFile.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const fd = {
            "_id":this.state.quizz._id,
            "name": this.state.name,
            "icone": this.state.icone,
            "questions": this.state.questions
        };
        axios.patch("http://localhost:8081/quizz", fd).then(
            res => console.log(res));
    };

    componentDidMount() {
        axios.get('http://localhost:8081/quizz/' + this.props.match.params.id).then((response) => {
            document.getElementById("QuizzName").value = response.data.name;
            document.getElementById("output").src = "http://localhost:8081" + response.data.icone;
            console.log(response.data);
            this.setState({
                quizz: response.data
            })
        });
    }

    loadFile = (event) => {
        let output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };

    remplirChampReponse = (id) => {
        if (this.state.quizz.questions[id]) {
            document.getElementById("description").value = this.state.quizz.questions[id].text;
            if (this.state.quizz.questions[id].reponses[0]) {
                if (this.state.quizz.questions[id].reponses[0].image) {
                    document.getElementById("reponse1").type = "file";
                    document.getElementById("reponse 1").src = "http://localhost:8081" + this.state.quizz.questions[id].reponses[0].reponse;
                } else {
                    document.getElementById("reponse1").type = "text";
                    document.getElementById("reponse 1").src = "";
                    document.getElementById("reponse1").value = this.state.quizz.questions[id].reponses[0].reponse;
                }
                document.getElementById("br1").checked = this.state.quizz.questions[id].reponses[0].bonne;
            }
            if (this.state.quizz.questions[id].reponses[1]) {
                if (this.state.quizz.questions[id].reponses[1].image) {
                    document.getElementById("reponse2").type = "file";
                    document.getElementById("reponse 2").src = "http://localhost:8081" + this.state.quizz.questions[id].reponses[1].reponse;
                } else {
                    document.getElementById("reponse2").type = "text";
                    document.getElementById("reponse 2").src = "";
                    document.getElementById("reponse2").value = this.state.quizz.questions[id].reponses[1].reponse;
                }
                document.getElementById("br2").checked = this.state.quizz.questions[id].reponses[1].bonne;
            }
            if (this.state.quizz.questions[id].reponses[2]) {
                if (this.state.quizz.questions[id].reponses[2].image) {
                    document.getElementById("reponse3").type = "file";
                    document.getElementById("reponse 3").src = "http://localhost:8081" + this.state.quizz.questions[id].reponses[2].reponse;
                } else {
                    document.getElementById("reponse3").type = "text";
                    document.getElementById("reponse 3").src = "";
                    document.getElementById("reponse3").value = this.state.quizz.questions[id].reponses[2].reponse;
                }
                document.getElementById("br3").checked = this.state.quizz.questions[id].reponses[2].bonne;
            }
            if (this.state.quizz.questions[id].reponses[3]) {
                if (this.state.quizz.questions[id].reponses[3].image) {
                    document.getElementById("reponse4").type = "file";
                    document.getElementById("reponse 4").src = "http://localhost:8081" + this.state.quizz.questions[id].reponses[3].reponse;
                } else {
                    document.getElementById("reponse4").type = "text";
                    document.getElementById("reponse 4").src = "";
                    document.getElementById("reponse4").value = this.state.quizz.questions[id].reponses[3].reponse;
                }
                document.getElementById("br4").checked = this.state.quizz.questions[id].reponses[3].bonne;
            }
        } else {
            document.getElementById("description").value = "";
            document.getElementById("reponse1").value = "";
            document.getElementById("br1").checked = "";
            document.getElementById("reponse2").value = "";
            document.getElementById("br2").checked = "";
            document.getElementById("reponse3").value = "";
            document.getElementById("br3").checked = "";
            document.getElementById("reponse4").value = "";
            document.getElementById("br4").checked = "";
            document.getElementById("reponse4").placeholder = "";
            document.getElementById("reponse1").placeholder = "";
            document.getElementById("reponse2").placeholder = "";
            document.getElementById("reponse3").placeholder = "";
        }
    };


    handleChange() {
        let classGeneral = document.getElementById("g").className;
        let hiden = document.getElementsByClassName("hiden");
        [...hiden].forEach((f) => {
            if (!f.id) {
                f.className = "column";
            }
        });
        let doc = document.getElementsByClassName("active");
        let id = doc[0].id;
        if (id === 'g') {
            id = 0;
        } else {
            id = parseInt(id) + 1
        }
        doc[0].className = "item police";
        let doc2 = document.getElementById(id);
        if (doc2) {
            doc2.className = "item active";
        }
        else {
            doc2 = document.getElementById(id - 1);
            doc2.className = "item active";
            document.getElementById("next").remove();
            hiden[0].className = "ui column";
            alert("Aucune questions supplémentaires");
        }

        if (classGeneral !== 'item active') {
            let description = document.getElementById("description").value;
            let r1 = document.getElementById("reponse1");
            let r2 = document.getElementById("reponse2");
            let r3 = document.getElementById("reponse3");
            let r4 = document.getElementById("reponse4");
            let img1 = false;
            let img2 = false;
            let img3 = false;
            let img4 = false;
            if (r1.files) {
                if (r1.placeholder !== "") {
                    r1 = r1.placeholder;
                }
                else {
                    r1 = this.state.quizz.questions[id-1].reponses[0].reponse;
                }
                img1 = true;
            } else {
                r1 = r1.value;
            }
            if (r2.files) {
                if (r2.placeholder !== "") {
                    r2 = r2.placeholder;
                }
                else {
                    r2 = this.state.quizz.questions[id-1].reponses[1].reponse
                }
                img2 = true;
            } else {
                r2 = r2.value;
            }
            if (r3.files) {
                if (r3.placeholder !== "") {
                    r3 = r3.placeholder;
                }
                else {
                    r3 = this.state.quizz.questions[id-1].reponses[2].reponse
                }
                img3 = true;
            } else {
                r3 = r3.value;
            }
            if (r4.files) {
                if (r4.placeholder !== "") {
                    r4 = r4.placeholder;
                }
                else {
                    r4 = this.state.quizz.questions[id-1].reponses[3].reponse
                }
                img4 = true;
            } else {
                r4 = r4.value;
            }

            let br1 = document.getElementById("br1").checked;
            let br2 = document.getElementById("br2").checked;
            let br3 = document.getElementById("br3").checked;
            let br4 = document.getElementById("br4").checked;

            let rs1 = {reponse: r1, bonne: br1, image: img1};
            let rs2 = {reponse: r2, bonne: br2, image: img2};
            let rs3 = {reponse: r3, bonne: br3, image: img3};
            let rs4 = {reponse: r4, bonne: br4, image: img4};
            let rs = [rs1, rs2, rs3, rs4];

            let questions = {
                text: description,
                reponses: rs,
            };
            this.setState({questions: this.state.questions.concat(questions)});
        } else {
            let name = document.getElementById("QuizzName").value;
            let image = document.getElementById("QuizzImage").placeholder || "";
            if (document.getElementById("gen").children[0]) {
                document.getElementById("gen").children[0].remove();
                document.getElementById("gen").children[0].remove();
                document.getElementById("gen").children[0].remove();
            }
            this.setState({name: name, icone: image});
        }
        if (this.state.icone === "") {
            this.setState({
                icone: this.state.quizz.icone
            })
        }
        this.remplirChampReponse(id);
    }

    render() {
        return (
            <ModifQuizz loadFile={this.loadFile} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        );
    }
}

export default EditAQuizz;



