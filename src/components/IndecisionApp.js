import React from 'react';
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };
    // Life Cycle Method- Fires on component mount
    componentDidMount() {

        try { // Handle invalid json
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) { // handle empty array
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    // Life Cycle Method- Fires on component update
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // Life Cycle Method- Fires when component goes away
    //    Useful for page change
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer.';

        //pass function (handleDeleteOptions) to modify data in children components
        // allow the reversal of data flow from children to parent
        return(
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0 ? true : false}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleCloseModal={this.handleCloseModal}
                    />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;