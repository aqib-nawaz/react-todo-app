import React, { Component } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Reset from "./components/Reset";
import TaskDetails from "./components/TaskDetails";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [{ title: "Todo App", status: false }],
    };
  }

  inputHandler = (title, status) => {
    this.setState({
      tasks: [...this.state.tasks, { title: title, status: status }],
    });
  };

  statusHandler = (todo) => {
      this.setState({
        tasks: this.state.tasks.map((task) => task.title === todo ? 
        {...task, status: !task.status} : task)
      })
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Add addInput={this.inputHandler} />
        <List tasks={this.state.tasks} statusHandler={this.statusHandler} />
        <Reset />
        <TaskDetails tasks={this.state.tasks} />
      </div>
    );
  }
}
