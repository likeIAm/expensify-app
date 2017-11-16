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
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters))
});

store.dispatch(addExpense({ description: 'Water bill', amount: 33000, createdAt: moment().valueOf() }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 45000, createdAt: moment().valueOf() }));
store.dispatch(addExpense({ description: 'Rent', amount: 123000, createdAt: moment().valueOf() }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));