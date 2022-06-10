import React, { Component } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Reset from "./components/Reset";
import TaskDetails from "./components/TaskDetails";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [{ title: "Todo App", status: "incomplete" }],
    };

  }

  inputHandler = (newTask, newTaskStatus) => {

    this.setState({
      tasks: [...this.state.tasks, { title: newTask, status: newTaskStatus }],
    });

  };

  statusToggleHandler = (checkedTask, isToggleChecked) => {

    this.setState({
      tasks: this.state.tasks.map((task) => {
        return {
          title: task.title,
          status:
            task.title === checkedTask && isToggleChecked
              ? "completed"
              : "incomplete",
        };
      }),
    });

  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Add addInput={this.inputHandler} />
        <List tasks={this.state.tasks} statusHandler={this.statusToggleHandler} />
        <Reset />
        <TaskDetails tasks={this.state.tasks} />
      </div>
    );
  }
}
