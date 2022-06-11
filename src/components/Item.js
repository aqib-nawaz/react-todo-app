import React, { Component } from "react";
import "./Item.css"
export default class Item extends Component {

    toggleHandle = (e) => {
        this.props.statusHandler(e.target.name);
    };

    deleteItemHandler = (e) => {
        console.log(e)
    }
    
    render() {
        return (
            <li className={ this.props.status? "completed":"incomplete"}>
                <div className="todo-item">
                    <input
                        type="checkbox"
                        checked={this.props.status}
                        name={this.props.title}
                        onChange={this.toggleHandle}
                    />
                    <span className="item-title">{this.props.title}</span>
                    {this.props.status?<i className="fa-solid fa-trash" onClick={this.deleteItemHandler}></i>: ""}
                </div>
            </li>
        );
    }
}
