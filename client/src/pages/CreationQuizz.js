import React, {Component} from "react";
import axios from "axios";
import ModifQuizz from "./QuizzCreateParts/ModifQuizz";

require("./CreationQuizz.css");

class CreationQuizz extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        axios.post("http://localhost:8081/quizz", this.state).then(
            res => console.log(res));
    };

    loadFile = (e) => {
        if (e.target.type ==="file") {
            const fd = new FormData();
            fd.append('picture', e.target.files[0], e.target.files[0].name);
            axios.post("http://localhost:8081/upload", fd).then(res => {
                console.log(res);
            });
            if (e.target.id ==="QuizzImage") {
                let output = document.getElementById('output');
                output.src = URL.createObjectURL(e.target.files[0]);
            }
            e.target.placeholder = "/static/img/"+e.target.files[0].name;
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
        if (!doc2) {
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
                r1 = r1.placeholder;
                img1 = true;
            }
            else {
                r1 = r1.value;
            }
            if (r2.files) {
                r2 = r2.placeholder;
                img2 = true;
            }
            else {
                r2 = r2.value;
            }
            if (r3.files) {
                r3 = r3.placeholder;
                img3 = true;
            }
            else {
                r3 = r3.value;
            }
            if (r4.files) {
                r4 = r4.placeholder;
                img4 = true;
            }
            else {
                r4 = r4.value;
            }

            let br1 = document.getElementById("br1").checked;
            let br2 = document.getElementById("br2").checked;
            let br3 = document.getElementById("br3").checked;
            let br4 = document.getElementById("br4").checked;

            let rs1 = {reponse:r1, bonne:br1, image:img1};
            let rs2 = {reponse:r2, bonne:br2, image:img2};
            let rs3 = {reponse:r3, bonne:br3, image:img3};
            let rs4 = {reponse:r4, bonne:br4, image:img4};
            let rs = [rs1,rs2,rs3,rs4];

            let questions = {
                text: description,
                reponses:rs,

            };
            document.getElementById("description").value = "";
            document.getElementById("reponse1").value = "";
            document.getElementById("reponse2").value = "";
            document.getElementById("reponse3").value = "";
            document.getElementById("reponse4").value = "";
            document.getElementById("reponse1").placeholder = "";
            document.getElementById("reponse2").placeholder = "";
            document.getElementById("reponse3").placeholder = "";
            document.getElementById("reponse4").placeholder = "";
            document.getElementById("br1").checked =false;
            document.getElementById("br2").checked =false;
            document.getElementById("br3").checked =false;
            document.getElementById("br4").checked =false;
            this.setState({questions: this.state.questions.concat(questions)});
        } else {
            let name = document.getElementById("QuizzName").value;
            let image = document.getElementById("QuizzImage").placeholder;
            if (document.getElementById("gen").children[0]) {
                document.getElementById("gen").children[0].remove();
                document.getElementById("gen").children[0].remove();
                document.getElementById("gen").children[0].remove();
            }
            this.setState({name: name,icone:image});
        }
    }

    render() {
        return (
            <ModifQuizz loadFile={this.loadFile} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        );
    }
}

export default CreationQuizz;



