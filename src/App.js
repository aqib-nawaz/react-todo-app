import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Reset from './components/Reset'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: [
        { title: "Todo App", status: "incomplete" },
        { title: "Image Search", status: "completed" },
        { title: "Weather App", status: "incomplete" },
        { title: "New App", status: "incomplete" },
        { title: "Expense Tracker", status: "incomplete" },
        { title: "Covid Tracker", status: "incomplete" }
      ] 
    }
  }


  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Add/>
        <List tasks= {this.state.tasks}/>
        <Reset />

        <h1>Task Details</h1>
        <h3>Total Tasks: {this.state.tasks.length}</h3>
        <h3>incomplete Tasks: {this.state.tasks.filter((task) => {
          return (task.status === "incomplete")
        }).length}</h3>
        <h3>Completed Tasks: {this.state.tasks.filter((task) => {
          return (task.status === "completed")
        }).length}</h3>

      </div>
    )
  }
}
