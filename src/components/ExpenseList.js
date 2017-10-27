import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.name}
        {props.expenses.length}
    </div>
);
// the connect function returns a function withAdminWarning like the one in hoc.js
const ConnectedExpenseList = connect((state) => {
    return { // here i'm passing the props to the ExpenseList component
        expenses: state.expenses,
        name: 'Luca'
    }
})(ExpenseList);

export default ConnectedExpenseList;