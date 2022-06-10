import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map((task) => {
                        return (
                            <Item key={task.title} title={task.title} status={task.status} />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
