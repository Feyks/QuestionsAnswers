import React, {Component} from "react";
import axios from "axios";

const site = "http://localhost:3000/quizz/";

require("./Style.css");

class ObjectQuizz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    render(){
        return (<div className="column">
                <a href={site+this.props._id+"/edit"}>
                    <button className="ui fluid massive center aligned right labeled icon button">
                        <i className="right arrow icon"></i>
                        {this.state.name}
                    </button>
                </a>
            </div>
        )
    }

}

class QuizzEdit extends Component {

    constructor(props){
        super(props);
        this.state = {
            quizz: []
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
                <div className="ui two column stackable grid container">
                    {allQuizz}
                </div>
            </div>
        );
    }
}

export default QuizzEdit;
