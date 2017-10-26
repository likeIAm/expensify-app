import { createStore, combineReducers } from 'redux';

// All the actions that i will need, this is why i need multiple reducers (one for every object in the state):
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expense reducers

const expensesReducer = (state = [], action) => {
    switch (action) {
        default:
            return state;
    }
};

//const store = createStore(expensesReducer);
const store = createStore(combineReducers({
    expenses: expensesReducer
}));
console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'fgdsgdsfsa',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};