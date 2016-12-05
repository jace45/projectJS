import React, { Component } from "react";

export default class ShowList extends Component {
    render() {
        var friendList = this.props.friendNames.map(function(friendName){
            return <li> {friendName} </li>;
        });
        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {friendList}
                </ul>
            </div>
        )
    }
}