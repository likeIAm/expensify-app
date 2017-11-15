import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} expense={expense} />
            ))
        )}
    </div>
);
// Remember that at every change of the state the component will
// be rerendere, i don't need to use store.subscribe 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);