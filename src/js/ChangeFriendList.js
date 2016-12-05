import React, { Component } from "react";
import TheButton from "./TheButton";

export default class ChangeFriendList extends Component {
    constructor(){
        super();
        this.state = {
            newFriend: ''
        }
    }

    updateFriend(e){
        this.setState({
            newFriend: e.target.value
        });
    }

    handleReset() {
        this.setState({
            newFriend: ''
        });
    }
    
    render() {
        return (
            <div>
                <input value={this.state.newFriend} onChange={this.updateFriend}/>
                <TheButton nameChange={this.state.newFriend}
                           resetState={this.handleReset} clickHandler={this.props.addName}
                           name='Add Friend' />
                <TheButton nameChange={this.state.newFriend}
                           resetState={this.handleReset} clickHandler={this.props.removeName}
                           name='Remove Friend'/>
            </div>
        )
    }
}
