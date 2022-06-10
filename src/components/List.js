import React, { Component } from "react";
import Item from "./Item";
import Button from "./Button";
import "./List.css"
export default class List extends Component {
    render() {
        return (
            <div className="item-container text-white">
                <div className="item-container-header">
                    <h2 className="text-center">Tasks</h2>
                    <Button onClick= {this.props.resetHandler} value="Reset"/>
                </div>
                <ul >
                    {this.props.tasks.map((task) => {
                        return (
                            <Item
                                statusHandler={this.props.statusHandler}
                                key={task.title}
                                title={task.title}
                                status={task.status}
                                task={task}
                                className="list-items"
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
