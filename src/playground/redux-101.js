import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
        };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
        };
        case 'RESET':
            return {
                count: state.count = 0
        };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;

    }
};
   
// createStore - you have to pass a function in and call it once right away.
// There is no state when it is first called, so it uses the default set in the 
// createStore(({ count: 0 }) => {})
const store = createStore(countReducer);

// Watch for changes in store

store.subscribe(() => {
    // getState fetches the current state
    console.log(store.getState());
});

// To unsubscribe
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

// Actions - an object that gets sent to the store (convention to use caps, INC_OTHER)

// Increment count

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Reset the count
store.dispatch(resetCount());
// Decrement count
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100}));