var ChangeFriendList = React.createClass({
    getInitialState(){
        return {
            newFriend: ''
        }
    },
    updateFriend(e){
        this.setState({
            newFriend: e.target.value
        });
    },
    handleReset() {
        this.setState({
            newFriend: ''
        });
    },
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
});
