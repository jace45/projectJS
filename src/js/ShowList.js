var ShowList = React.createClass({
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
});