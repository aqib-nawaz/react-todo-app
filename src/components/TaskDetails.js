import React, { Component } from "react";
import TasksFilter from "./TasksFilter";
import "./TaskDetails.css";
import Button from "./Button";
export default class TaskDetails extends Component {
    constructor() {
        super();
        this.state = {
            allTasks: false,
            incompleteTasks: false,
            completedTasks: false,
        };
    }

    allTasks = () => {
        this.setState({
            allTasks: !this.state.allTasks,
            incompleteTasks: false,
            completedTasks: false,
        });
    };
    incompleteTasks = () => {
        this.setState({
            allTasks: false,
            incompleteTasks: !this.state.incompleteTasks,
            completedTasks: false,
        });
    };
    completedTasks = () => {
        this.setState({
            allTasks: false,
            incompleteTasks: false,
            completedTasks: !this.state.completedTasks,
        });
    };

    render() {
        return (
            <div>
                <hr className="text-white" />
                <h2 className="text-white">Task Details</h2>

                <div className="tasks-details-container">
                    <div>
                        <Button onClick={this.allTasks} value="All" />:{" "}
                        {this.props.tasks.length}
                    </div>
                    <div>
                        <Button onClick={this.incompleteTasks} value="Incomplete" />
                        {
                            this.props.tasks.filter((task) => {
                                return task.status === false;
                            }).length
                        }
                    </div>
                    <div>
                        <Button onClick={this.completedTasks} value="completed" />
                        {
                            this.props.tasks.filter((task) => {
                                return task.status === true;
                            }).length
                        }
                    </div>
                </div>

                {/* Tasks Filters */}

                <div className="filtered-tasks-container">
                    {this.state.allTasks && (
                        <div>
                            <ul>
                                <TasksFilter tasks={this.props.tasks} />
                            </ul>
                        </div>
                    )}

                    {this.state.incompleteTasks && (
                        <div>
                            <ul>
                                <TasksFilter
                                    tasks={this.props.tasks.filter((task) => !task.status)}
                                />
                            </ul>
                        </div>
                    )}

                    {this.state.completedTasks && (
                        <div>
                            <ul>
                                <TasksFilter
                                    tasks={this.props.tasks.filter((task) => task.status)}
                                />
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
