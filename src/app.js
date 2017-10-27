import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters))
});

store.dispatch(addExpense({ description: 'Water bill', amount: 33000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 45000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 123000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));