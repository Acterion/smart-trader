import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired
    }

    state = {
        inputValue: this.props.cnt
    };

    set = (c) => {
        let newCnt = Math.min(this.props.max, Math.max(c, this.props.min));
        this.setState({inputValue: newCnt});
    }

    increase = () => {
        this.set(this.state.inputValue + 1);
    };

    decrease = () => {
        this.set(this.state.inputValue - 1);
    };

    setValue = (val) => {
        this.setState({inputValue:val});
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13){
            this.applyValue();
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue}
                       onChange={(e) => this.setValue(e.target.value)}
                       onBlur={this.applyValue}
                       onKeyUp={this.checkEnterKey}
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}