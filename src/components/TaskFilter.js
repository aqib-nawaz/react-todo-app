import React, { Component } from "react";
import "./TaskFilter.css";
import Button from "./Button";
export default class TaskFilter extends Component {
    render() {
        return (
            <div className="btn-container">
                <Button
                    className="task-detail-btn"
                    onClick={this.props.allTasksHandler}
                    value="All"
                />

                <Button
                    className="task-detail-btn"
                    onClick={this.props.incompleteTasksHandler}
                    value="Incomplete"
                />

                <Button
                    className="task-detail-btn"
                    onClick={this.props.completedTasksHandler}
                    value="completed"
                />
                <Button
                    className="task-detail-btn"
                    onClick={this.props.resetHandler}
                    value="Reset"
                />
            </div>
        );
    }
}
