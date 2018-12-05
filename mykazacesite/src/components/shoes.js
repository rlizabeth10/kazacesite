import React, {Component} from 'react'
import {button} from "react-mdl";

class Shoes extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            value: null,
        };
    }

    handleClick = () => {
        this.setState({value: true});
        console.log(this.state.value);
    };

    render() {
        return (

            <div><h1>Product Page</h1>
                {this.state.value === null ? "value is null" : "value is not null"}
                <img
                    src="https://cultees.co/images/back-3.png"
                    alt="text   "
                />

                <button type="button" onClick={this.handleClick} className="btn btn-dark btn-lg"> Black</button>
                <button type="button" className="btn btn-danger btn-lg"> Red</button>

            </div>

        )
    }
}

export default Shoes;