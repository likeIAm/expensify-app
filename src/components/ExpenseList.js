import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} expense={expense} />
        ))}
    </div>
);
// Remember that at every change of the state the component will
// be rerendere, i don't need to use store.subscribe 
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseList);