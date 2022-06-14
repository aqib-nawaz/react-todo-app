import React, { Component } from "react";
import Item from "./Item";
import "./List.css"
export default class List extends Component {
    render() {
        return (
            <div className="item-container text-white">
                <div className="item-container-header">
                </div>
                <ul>
                    {this.props.tasks.map((task) => {
                        return (
                            <Item
                                key={task.title}
                                title={task.title}
                                status={task.status}
                                task={task}
                                className="list-items"
                                statusHandler={this.props.statusHandler}
                                deleteHandler = {this.props.deleteHandler}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
