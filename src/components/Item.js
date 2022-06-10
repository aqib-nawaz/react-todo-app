import React, { Component } from "react";

export default class Item extends Component {

    toggleHandle = (e) => {
        this.props.statusHandler(e.target.name)
    }
    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    name={this.props.title}
                    // checked={!this.props.status}
                    onChange={this.toggleHandle}
                />
                {this.props.title} - {this.props.status ? "completed":"incomplete"}
            </li>
        );
    }
}
