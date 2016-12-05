import React, { Component } from "react";

export default class TheButton extends Component {
    handleClick(){
        this.props.clickHandler(this.props.nameChange);
        this.props.resetState();
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.name}</button>
        )
    }
}
