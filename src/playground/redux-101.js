import { createStore } from 'redux';

const add = ({a, b}) => { // desctructure an object in the argument
    return a + b;
}
console.log(add({ a: 1, b: 3}));
// Actions generators
// const incrementCount = (payload = {}) => { // payload = {} is a defualt, it means if no pareameter is passed or is undefined, payload will be an object
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     };
// };

// const incrementCount = ({ incrementBy } = {}/*payload = {}*/) => { // payload = {} is a defualt, it means if no pareameter is passed or is undefined, payload will be an object
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
//     };
// };

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                //count: state.count + (typeof action.incrementBy === 'number' ? action.incrementBy : 1)
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
              count: action.count  
            };
        default:
            return state;
    }
});

const unscribe = store.subscribe(() => { 
        console.log(store.getState())
});

store.dispatch(incrementCount({
    incrementBy: 99
}));

store.dispatch(incrementCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 33 }));

store.dispatch(setCount({ count: 123}));
store.dispatch(resetCount());
// Action / an object that get sent to the store

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 5
// });

unscribe();