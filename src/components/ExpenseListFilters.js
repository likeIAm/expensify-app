import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" 
            value={props.textFilter}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
        <select value={props.orderBy} onChange={(e) => {
            console.log(e.target);
            console.log(sortByDate);
            if (e.target.value === 'date') {
                props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
                props.dispatch(sortByAmount());
            }
        }}>
            <option>date</option>
            <option>amount</option>
        </select>
    </div>
);

const mapStateToProps = connect((state) => {
    return {
        textFilter: state.filters.text,
        orderBy: state.filters.orderBy
    };
});

export default mapStateToProps(ExpenseListFilters);