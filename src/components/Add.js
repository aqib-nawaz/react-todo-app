import React, { Component } from "react";
import "./Add.css";
import Button from "./Button";
export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            status: false,
            display: true,
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addInput(this.state.title, this.state.status);

        this.setState({
            title: "",
        });
    };

    inputHandler = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    displayInputField = () => {
        this.setState({
            display: !this.state.display,
        });
    };

    render() {
        return (
            <div className="input-container">
                <h2 className="text-white">Todo App</h2>

                <div>
                    {this.state.display ? (
                        <div>
                            <Button
                                className="display-input-field"
                                value="ADD"
                                onClick={this.displayInputField}
                            />
                        </div>
                    ) : (
                        <div>
                            <form onSubmit={this.submitHandler}>
                                <input
                                    type="text"
                                    id="input"
                                    placeholder="Add todo"
                                    value={this.state.title}
                                    onChange={this.inputHandler}
                                />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </form>
                            <div className="input-btn-container">
                                <Button
                                    className="close-input-btn btn-danger"
                                    value={<i className="fa-solid fa-xmark"></i>}
                                    onClick={this.displayInputField}
                                />
                                <Button className="input-button" value="Add" type="submit" onClick={this.submitHandler} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
