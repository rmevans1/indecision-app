console.log('App.js is running!');

class VisibleToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDetails = this.toggleDetails.bind(this);
        // State configuration- initial state (step 1)
        this.state = {
            visible: false
        };
    }
    toggleDetails(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleDetails}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && <p>These are the details to show!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibleToggle/>, document.getElementById('app'));
