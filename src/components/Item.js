import React, { Component } from "react";
import "./Item.css"
export default class Item extends Component {

    toggleHandle = (e) => {
        this.props.statusHandler(e.target.name);
    };
    
    render() {
        return (
            <li className={ this.props.status? "completed":"incomplete"}>
                <div className="todo-item">
                    <input
                        type="checkbox"
                        name={this.props.title}
                        onChange={this.toggleHandle}
                    />
                    {this.props.title} - {this.props.status ? "completed" : "incomplete"}
                </div>
            </li>
        );
    }
}
