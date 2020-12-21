import React from 'react';
import PropTypes from 'prop-types';
import LazyInput from '../input/lazy/lazy'
import styles from './counter.module.css'
import {Button} from "react-bootstrap";

export default class extends React.Component{
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    static defaultProps = {
        onChange: function (cnt) {}
    }

    set = (c) => {
        let newCnt = Math.min(this.props.max, Math.max(c, this.props.min));
        this.setState({inputValue: newCnt});

        this.props.onChange(newCnt);
    }

    increase = () => {
        this.set(this.props.cnt + 1);
    };

    decrease = () => {
        this.set(this.props.cnt - 1);
    };

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }
    render(){
        return (
            <div>
                <div>
                    <button className="btn btn-outline-primary" onClick={this.decrease}>-</button>
                    <LazyInput
                            value={this.props.cnt}
                            onChange={(e) => this.onChange(e)}
                            nativeProps={{type: 'text', className: styles.input}}
                    />
                    <button className="btn btn-outline-primary" onClick={this.increase}>+</button>
                </div>
            </div>
        );
    }
}