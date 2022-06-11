import React, { Component } from "react";
import Item from "./Item";
export default class TasksFilter extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.tasks.map((task) => {
                    return (
                        <Item
                            statusHandler={this.props.statusHandler}
                            key={task.title}
                            title={task.title}
                            status={task.status}
                            task={task}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}
