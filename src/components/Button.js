import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <div>
                <button
                    className={"btn btn-primary " + this.props.className}
                    onClick={this.props.onClick}
                >
                    {this.props.value}
                </button>
            </div>
        );
    }
}
