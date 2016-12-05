import React, { Component } from "react";
import ChangeFriendList from "./ChangeFriendList";
import ShowList from "./ShowList";

export default class FriendsContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Jayson Stephens',
            friends: ['Vernon Cutting', 'Taariq Eddy', 'Will Dalton', 'David Bennett']
        };
    }
    // getInitialState() {
    //     return {
    //         name: 'Jayson Stephens',
    //         friends: ['Vernon Cutting', 'Taariq Eddy', 'Will Dalton', 'David Bennett']
    //     }
    // }

    addFriend(friend) {
        this.state.friends.push(friend);
        this.setState({
            friends: this.state.friends
        })
    }
    removeFriend(friend) {
        var index = this.state.friends.indexOf(friend);
        if (index > -1){
            this.state.friends.splice(index, 1);
            this.setState({
                friends: this.state.friends
            });
        }
    }
    render() {
        return (
            <div>
                <h3> Name: {this.state.name} </h3>
                <ChangeFriendList removeName={this.removeFriend}
                                  addName={this.addFriend} />
                <ShowList friendNames={this.state.friends} />
            </div>
        )
    }
}