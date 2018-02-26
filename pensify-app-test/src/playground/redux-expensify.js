import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// All the actions that i will need, this is why i need multiple reducers (one for every object in the state):
// ADD_EXPENSE
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE
const editExpense = (id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Expenses Reducer
const expenseReducerDefault = [];
const expensesReducer = (state = expenseReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat([action.expense]);
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (action.id === expense.id) {
                    return { ...expense, ...action.updates };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});
// Filters Reducer
const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text };
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' };
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

const getVisibleExpenses = (expenses, { startDate, endDate, text, sortBy }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || startDate >= expense.startDate;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});

const expenseOne = store.dispatch(addExpense({ description: 'Blablabla', amount: 3300}));
const expenseTwo = store.dispatch(addExpense());
console.log(expenseTwo);
//store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
store.dispatch(editExpense(expenseOne.expense.id, {
    description: 'Edited description'
}));

store.dispatch(setTextFilter('edited des'));
store.dispatch(sortByAmount());
store.dispatch(setStartDate('-1'));
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

const person = {
    name: 'Luca',
    surname: 'Oliva'
};

console.log({
    ...person,
    age: 32
});

