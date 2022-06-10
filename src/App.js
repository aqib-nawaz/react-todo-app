import React, { Component } from "react";
import Add from "./components/Add";
import List from "./components/List";
import TaskDetails from "./components/TaskDetails";
import "./App.css";

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
      tasks: this.state.tasks.map((task) =>
        task.title === todo ? { title: task.title, status: !task.status } : task
      ),
    });
  };

  resetHandler = () => {
    this.setState({
      tasks: [],
    });
  };

  render() {
    return (
      <div className="container text-center">
        <Add addInput={this.inputHandler} />
        <List
          tasks={this.state.tasks}
          statusHandler={this.statusHandler}
          resetHandler={this.resetHandler}
        />
        <TaskDetails tasks={this.state.tasks} />
      </div>
    );
  }
}
