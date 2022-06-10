import React, { Component } from "react";

export default class Add extends Component {
    constructor() {
        super();
        this.state = ({
            title: "",
            status: "",
        });
    }
    submitHandler = (e) => {
        e.preventDefault()

    }

    inputHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        onChange={this.inputHandler}
                        value={this.state.title}
                        id="input"
                        placeholder="Add todo"
                    />
                </form>
            </div>
        );
    }
}
