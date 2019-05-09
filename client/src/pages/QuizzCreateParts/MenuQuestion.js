import React, {Component} from "react";

class MenuQuestion extends Component {
    render() {
        return (
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
        );
    }
}

export default MenuQuestion;