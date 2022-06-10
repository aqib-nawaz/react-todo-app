import React, { Component } from "react";
import "./Add.css"
import Button from "./Button";
export default class Add extends Component {
    constructor() {
        super();
        this.state = ({
            title: "",
            status: false,
        });
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addInput(this.state.title, this.state.status )
        
        this.setState({
            title:""
        })
    }

    inputHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    render() {
        return (
            <div className="input-container">
                <h2 className="text-white">Todo App</h2>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        onChange={this.inputHandler}
                        value={this.state.title}
                        id="input"
                        placeholder="Add todo"
                    />
                </form>
                <div className="input-btn-container">
                    <Button className="close-input-btn btn-danger" value= "Close"/>
                    <Button className="input-button btn-success" value= "Add Task"/>
                </div>
            </div>
        );
    }
}
