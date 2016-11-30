var TheButton = React.createClass({
    handleClick(){
        this.props.clickHandler(this.props.nameChange);
        this.props.resetState();
    },
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.name}</button>
        )
    }
});
