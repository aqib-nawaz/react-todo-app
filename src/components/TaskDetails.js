import React, { Component } from "react";

export default class TaskDetails extends Component {
    render() {
        return <div>
            <h1>Task Details</h1>
            <h3>Total Tasks: {this.props.tasks.length}</h3>
            <h3>
                incomplete Tasks:{" "}
                {
                    this.props.tasks.filter((task) => {
                        return task.status === false;
                    }).length
                }
            </h3>
            <h3>
                Completed Tasks:{" "}
                {
                    this.props.tasks.filter((task) => {
                        return task.status === true;
                    }).length
                }
            </h3>
        </div>;
    }
}
