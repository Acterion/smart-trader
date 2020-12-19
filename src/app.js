import React from 'react';
import CounterClass from './counter/class.js';
import CounterFunction from './counter/function.js';

export default function(){
    return (
        <div>
            <h2>Counter as class</h2>
            <CounterClass min={10} max={50} cnt={10}/>
            <h2>Counter as function</h2>
            <CounterFunction min={10} max={50} cnt={10} onChange={()=>{}}/>
        </div>
    );
}