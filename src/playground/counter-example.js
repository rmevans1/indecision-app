class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // State configuration- initial state (step 1)
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        // step 3- update state
        // step 4- refresh based on new state (automatic)
        this.setState((prevState) => {
            return {
              count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        //This will work set state to 1
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     };
        // });

        // Doesnt work- setState runs asynchronously
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }
    render() {
        // this.state.count step 2 in state
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));

/**let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
}




const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};
**/