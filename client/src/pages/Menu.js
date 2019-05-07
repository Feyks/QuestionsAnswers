import React, {Component} from 'react';
import logo2 from './logo2.png';

require("./Style.css");

class Menu extends Component {
    render() {
        return (
            <div className="ui massive fluid five item menu">
                <div className="header item">
                    <a href="/">
                        <img src={logo2} className="logo2"/>
                    </a>
                </div>
                <a className="item " href="/quizz">
                    <i className="gamepad huge icon"></i>
                    <p className="para">Jouer</p>
                </a>
                <a className="item" href="/quizz/edit">
                    <p className="para">Editer</p>
                </a>
                <a className="item" href="/quizz/create">
                    <p className="para">Créer</p>
                </a>
                <a className="item disable">
                </a>
            </div>
        );
    }
}

export default Menu;