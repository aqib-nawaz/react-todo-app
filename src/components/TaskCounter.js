import React, { Component } from "react";
import "./TaskCounter.css"
export default class TaskCounter extends Component {
    render() {
        return (
            <div className="counter-container">
                <div> All: {this.props.tasks.length}</div>
                <div>
                    Incomplete:&nbsp;
                    {
                        this.props.tasks.filter((task) => {
                            return task.status === "incomplete";
                        }).length
                    }
                </div>

                <div>
                    Completed:&nbsp;
                    {
                        this.props.tasks.filter((task) => {
                            return task.status === "completed";
                        }).length
                    }
                </div>
            </div>
        );
    }
}
