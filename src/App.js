import React, { Component } from "react";
import Add from "./components/Add";
import List from "./components/List";
import TaskFilter from "./components/TaskFilter";
import "./App.css";
import TaskCounter from "./components/TaskCounter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskFilter: [],
    };
  }
  filterFlag = false;
  
  componentDidUpdate() {
    localStorage.setItem("taskList", JSON.stringify(this.state.tasks));
  }

  componentDidMount() {
    
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    if(taskList){
      this.setState({
        tasks: taskList,
        taskFilter: taskList
      });
    }
    
  }
  inputHandler = (title, status) => {
    let duplicateFlag = false;

    this.state.tasks.filter((task) =>
      task.title.toLowerCase() === title.toLowerCase() ? (duplicateFlag = true) : (duplicateFlag = false)
    );

    if (duplicateFlag) {
      alert("Task Already Exists");

    } else if (title === "") {
      alert("Invalid input ( Empty value)");

    } else {
      this.setState({
        tasks: [...this.state.tasks, { title, status }],
      });
    }
  };

  statusHandler = (toggleTaskTitle) => {
    
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.title === toggleTaskTitle
          ? {
            title: task.title,
            status: task.status === "incomplete" ? "completed" : "incomplete",
          }
          : task
      ),

      taskFilter: this.state.taskFilter.map((task) =>
        task.title === toggleTaskTitle
          ? {
            title: task.title,
            status: task.status === "incomplete" ? "completed" : "incomplete",
          }
          : task
      ),
    });
  };

  allTasksHandler = () => {
    this.filterFlag = false;
    this.setState({
      taskFilter: [...this.state.tasks],
    });
  };
  incompleteTasksHandler = () => {
    
    this.filterFlag = true;
    this.setState({
      taskFilter: this.state.tasks.filter(
        (task) => task.status === "incomplete"
      ),
    });
  };

  completedTasksHandler = () => {

    this.filterFlag = true;
    this.setState({
      taskFilter: this.state.tasks.filter(
        (task) => task.status === "completed"
      ),
    });
  };

  searchHandler = (title) => {
    this.filterFlag = true;
    let regExp = new RegExp(title, 'i');
    this.setState({
      taskFilter: this.state.taskFilter.filter(task => regExp.test(task.title))
    })
    if(title === ""){
      this.filterFlag = false
      this.setState({
        taskFilter: this.state.tasks
      })
    }
  };

  deleteHandler = (title) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.title !== title)
    })
  }
  resetHandler = () => {
    this.setState({
      taskFilter: [],
      tasks: [],
    });
  };

  render() {
    return (
      <div className="container text-center">
        <TaskCounter tasks={this.state.tasks} />
        <Add addInput={this.inputHandler} searchHandler={this.searchHandler} />

        <List
          tasks={this.filterFlag ? this.state.taskFilter : this.state.tasks}
          statusHandler={this.statusHandler}
          deleteHandler = {this.deleteHandler}
        />
        <TaskFilter
          allTasksHandler={this.allTasksHandler}
          incompleteTasksHandler={this.incompleteTasksHandler}
          completedTasksHandler={this.completedTasksHandler}
          resetHandler={this.resetHandler}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}
