import React, { Component } from "react";
import "./Item.css";
export default class Item extends Component {
    toggleHandle = (toggleTaskTitle) => {
        this.props.statusHandler(toggleTaskTitle);
    };

    deleteItemHandler = (title) => {
        this.props.deleteHandler(title)
    };

    render() {
        return (
            <li>
                <div className="todo-item">
                    <input
                        type="checkbox"
                        checked={this.props.status === "completed"}
                        name={this.props.title}
                        onChange={(e) => this.toggleHandle(this.props.title)}
                    />
                    <span
                        className={
                            this.props.status === "completed"
                                ? "completed item-title"
                                : "incomplete item-title"
                        }
                    >
                        {this.props.title}
                    </span>
                    {this.props.status === "completed" && (
                        <i
                            className="fa-solid fa-trash"
                            onClick={e => this.deleteItemHandler(this.props.title)}
                        ></i>
                    )}
                </div>
            </li>
        );
    }
}
