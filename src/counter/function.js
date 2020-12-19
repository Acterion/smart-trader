import React, {useState} from 'react';
// import PropTypes from 'prop-types';

export default function (props) {
    // propTypes = {
    //     min: PropTypes.number.isRequired,
    //     max: PropTypes.number.isRequired,
    //     cnt: PropTypes.number.isRequired,
    //     onChange: PropTypes.func
    // }


    let [inputValue, inputDisp] = useState(props.cnt);
    let [current, curDisp] = useState(props.cnt);

    let applyCurrent = () => {
        let newCnt = Math.min(props.max, Math.max(current, props.min));
        inputDisp(newCnt);
        props.onChange(newCnt);
    }

    let setCurrent = (c) => {
        let newC = parseInt(c);
        curDisp(isNaN(newC) ? props.min : newC);
    }

    let increase = () => {
        setCurrent(current + 1);
        applyCurrent();
    }

    let decrease = () => {
        setCurrent(current - 1);
        applyCurrent();
    }

    return (
        <div>
            <button onClick={decrease}>-</button>
            <input
                value={inputValue}
                onChange={(e) => setCurrent(e.target.value)}
                onBlur={applyCurrent}
            />
            <button onClick={increase}>+</button>
        </div>
    )
}

