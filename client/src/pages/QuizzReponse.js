// import React, {Component} from "react";
// import axios from "axios";
//
// require("./Style.css");
//
//
// class Reponse extends Component{
//
//     render() {
//         return (
//             <div className="ui container">
//                 <button onClick={this.props.questionSuivante(this.props.nb)} className="ui massive button espace1">{this.props.reponse}</button>
//             </div>
//         )
//     }
// }
//
//
// class QuizzReponse extends Component {
//
//     constructor() {
//         super();
//         this.setState({
//             id: this.props.id,
//             quizz: [],
//             reponses: [],
//             questionActive: 0
//         });
//         this.loadFile = this.loadFile.bind(this);
//     }
//
//     componentDidMount() {
//         axios.get('http://localhost:8081/quizz/'+this.state.id).then((response) => {
//             this.setState({
//                 quizz: response.data
//             })
//         });
//     }
//
//     questionSuivante(reponse){
//
//         if(this.state.questionActive === this.state.quizz.questions.length - 1) {
//             this.setState({
//                 reponse: this.state.reponses.push(reponse)
//             })
//         }
//         else{
//             this.setState({
//             reponse: this.state.reponses.push(reponse),
//             questionActive: this.state.questionActive++
//             })
//         }
//     }
//
//     render() {
//
//         const question = this.state.quizz[this.state.questionActive];
//
//         const reponses = question.reponses.map((r) => {
//
//             <Reponse questionSuivante={this.questionSuivante} nb={this.state.questionActive} reponse={r.reponse}/>
//         });
//
//         return (
//             <div className="menuPlay">
//                 <div>
//                     <div className="ui center aligned raised very padded text container segment">
//                         <p>
//                             <h1 className="ui huge header">{question.name}</h1>
//                         </p>
//                     </div>
//                 </div>
//                 <div className="ui two column vertical divided grid buttons">
//                     {reponses}
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default QuizzReponse;