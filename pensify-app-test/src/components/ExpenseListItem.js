import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link>
        <p>{props.expense.amount} - {moment(props.expense.createdAt).format('MMM Do, YYYY')}</p>
    </div>
);

export default ExpenseListItem;