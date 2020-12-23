import React from 'react';
import PropTypes from 'prop-types';
import LazyInput from '../lazy'
import styles from './counter.module.css'

export default class extends React.Component{
    static defaultProps = {
        onChange: function (cnt) {}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    lazyInput = React.createRef();

    set = (c) => {
        let newCnt = Math.min(this.props.max, Math.max(c, this.props.min));
        this.props.onChange(newCnt);
        return newCnt;
    }

    increase = () => {
        this.set(this.props.cnt + 1);
    };

    decrease = () => {
        this.set(this.props.cnt - 1);
    };

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt);
        if (realCnt.toString() !== e.target.value){
            this.lazyInput.current.setValue(realCnt);
        }
    }

    render(){
        return (
            <div>
                <button className="btn btn-outline-primary" onClick={this.decrease}>-</button>
                <LazyInput
                        value={this.props.cnt}
                        onChange={(e) => this.onChange(e)}
                        nativeProps={{type: 'text', className: styles.input}}
                        ref={this.lazyInput}
                />
                <button className="btn btn-outline-primary" onClick={this.increase}>+</button>
            </div>
        );
    }
}