import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + (typeof action.incrementBy === 'number' ? action.incrementBy : 1)
            };
        case 'DECREMENT':
            return {
                count: state.count - (typeof action.decrementBy === 'number' ? action.decrementBy : 1)
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

// Action / an object that get sent to the store
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 5
});

unscribe();