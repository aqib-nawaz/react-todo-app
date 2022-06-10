import React, { Component } from "react";
import "./TaskDetails.css"
export default class TaskDetails extends Component {
    render() {
        return (
            <div>
                <hr className="text-white"/>
                <h2 className="text-white">Task Details</h2>

                <div className="tasks-details-container">
                    <h5>All: {this.props.tasks.length}</h5> 
                    <h5>
                        Incomplete:{" "}
                        {
                            this.props.tasks.filter((task) => {
                                return task.status === false;
                            }).length
                        }
                    </h5>
                    <h5>
                        Completed:{" "}
                        {
                            this.props.tasks.filter((task) => {
                                return task.status === true;
                            }).length
                        }
                    </h5>
                </div>
            </div>
        );
    }
}
