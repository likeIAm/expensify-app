import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = (props) => (
    <div>
        <h3>{props.expense.description}</h3>
        <p>{props.expense.amount} - {moment(props.expense.createdAt).format('MMM Do, YYYY')}</p>
        <button onClick={() => props.dispatch(
            removeExpense({ id: props.expense.id }))}
        >
            Remove
        </button>
    </div>
);

export default connect()(ExpenseListItem);