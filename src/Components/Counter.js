import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Actions/CounterAction';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch()
    

    const handleIncrement = ()=> {
         dispatch(incrementCounter())
    }
    const handleReset = ()=> {
         dispatch(resetCounter())
    }
    const handleDecrement = ()=> {
         dispatch(decrementCounter())
    }
    return (
        <div>
            <h1>Counter App</h1>

            <h3>Count: {count}</h3>
            <button style={{margin:'3px'}} onClick={handleIncrement}>INCREMENT</button>
            <button style={{margin:'3px'}} onClick={handleReset}>RESET</button>
            <button style={{margin:'3px'}} onClick={handleDecrement}>DECREMENT</button>
        </div>
    );
};

export default Counter;