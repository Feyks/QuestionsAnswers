import React, {Component} from "react";
import axios from 'axios';

const site = "http://localhost:3000/quizz/";

require("./Style.css");

const quizzTest = [{
    "name": "Quizz de Test 2",
    "icone": "/icone/test2",
    "tags": [{"txt":"test"},{"txt":"pet"}],
    "description": "Ceci est un quizz de test",
    "questions": [
        {
            "text": "Qu'est ce qu'un escargot ?",
            "reponses": [
                {
                    "reponse": "Un escargot",
                    "image": false,
                    "bonne": true
                },
                {
                    "reponse": "Un NES car GoT",
                    "image": false,
                    "bonne": false
                },
                {
                    "reponse": "Obiwan Kenobi",
                    "image": false,
                    "bonne": false
                }
            ]
        },
        {
            "text": "Qu'est ce que le shmilblick ?",
            "reponses": [
                {
                    "reponse": "Un escargot",
                    "image": false,
                    "bonne": true
                },
                {
                    "reponse": "Un oeuf",
                    "image": false,
                    "bonne": false
                },
                {
                    "reponse": "une connerie",
                    "image": false,
                    "bonne": false
                }
            ]
        }
    ]
},
    {
        "name": "Quizz de Test 3",
        "icone": "/icone/test2",
        "tags": [{"txt":"test"},{"txt":"pet"}],
        "description": "Ceci est un quizz de test",
        "questions": [
            {
                "text": "Qu'est ce qu'un escargot ?",
                "reponses": [
                    {
                        "reponse": "Un escargot",
                        "image": false,
                        "bonne": true
                    },
                    {
                        "reponse": "Un NES car GoT",
                        "image": false,
                        "bonne": false
                    },
                    {
                        "reponse": "Obiwan Kenobi",
                        "image": false,
                        "bonne": false
                    }
                ]
            },
            {
                "text": "Qu'est ce que le shmilblick ?",
                "reponses": [
                    {
                        "reponse": "Un escargot",
                        "image": false,
                        "bonne": true
                    },
                    {
                        "reponse": "Un oeuf",
                        "image": false,
                        "bonne": false
                    },
                    {
                        "reponse": "une connerie",
                        "image": false,
                        "bonne": false
                    }
                ]
            }
        ]
    }
];

class ObjectQuizz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    render(){
        return (<div className="column">
            <a href={site+this.props._id+"/play"}>
            <button className="ui fluid massive center aligned right labeled icon button">
                <i className="right arrow icon"></i>
                {this.state.name}
            </button>
            </a>
            </div>
        )
    }

}

class Quizz extends Component {

    constructor(props){
        super(props);
        this.state = {
            quizz: quizzTest
        }
    }

    async componentDidMount() {
       const quizz = (await axios.get('http://localhost:8081/quizz').then((res) => {
           this.setState({
               quizz:res.data
           })
       }));

    }

    // async getSearched(){
    //     const quizz = (await axios.post('http://localhost:8081/tag',{tag:document.getElementById('search').value}))git
    // }

    render() {

        var allQuizz =  this.state.quizz.map((q) =>
             <ObjectQuizz name={q.name} _id={q._id}/>
        );

        return (
            <div className="quizz">
                <div className="recherche">
                    <div className="ui massive action input">
                        <input id="search" type="text" onSubmit={this.getSearched} placeholder="Rechercher..."></input>
                        <div className="ui button">Rechercher</div>
                    </div>
                </div>
                <div className="ui two column stackable grid container">
                {allQuizz}
                </div>
            </div>
        );
    }
}

export default Quizz;