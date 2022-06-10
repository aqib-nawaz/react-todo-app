import React, { Component } from "react";

export default class Item extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" id="checkbox" />
                {this.props.title} - {this.props.status}
            </li>
        );
    }
}
