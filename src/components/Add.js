import React, { Component } from "react";
import "./Add.css";
import Button from "./Button";
export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            status: "incomplete",
            display: true,
            searchBtnActive: false,
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

        if(this.state.searchBtnActive){
            this.props.searchHandler(e.target.value)
        }
    };

    displayInputField = () => {
        this.setState({
            display: !this.state.display,
        });
    };

    searchHandler = () => {
        this.setState({
            searchBtnActive: !this.state.searchBtnActive,
        });
    };
    render() {
        return (
            <div className="input-container">
                <h3 className="text-white">Todo App</h3>

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
                                    placeholder={
                                        this.state.searchBtnActive ? "Search" : "Add todo"
                                    }
                                    value={this.state.title}
                                    onChange={this.inputHandler}
                                />
                                {this.state.searchBtnActive && (
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                )}
                            </form>
                            <div className="input-btn-container">
                                <Button
                                    className="close-input-btn btn-danger"
                                    value="Close"
                                    onClick={this.displayInputField}
                                />
                                <Button
                                    className="search-button"
                                    value="Search"
                                    id="btn-search"
                                    name="search"
                                    type="submit"
                                    onClick={this.searchHandler}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
