import React, { Component } from "react";
import "./Item.css"

export default class Item extends Component {
    checkToggle = (e) => {
        let isChecked = e.target.checked;
        this.props.statusHandler(e.target.name, isChecked);
    };

    render() {
        return (
            <li
                className={
                    this.props.status === "completed" ? "completed" : "incomplete"
                }
            >
                <input
                    type="checkbox"
                    id="checkbox"
                    name={this.props.title}
                    onChange={this.checkToggle}
                />
                {this.props.title} - {this.props.status}
            </li>
        );
    }
}
