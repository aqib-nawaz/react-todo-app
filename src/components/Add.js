import React, { Component } from "react";

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
