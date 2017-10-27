import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" 
            value={props.textFilter}
            onChange={(e) => {
                console.log(e);
                console.log(e.target);
                console.log(props);
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
    </div>
);

const mapStateToProps = connect((state) => {
    return {
        textFilter: state.filters.text
    };
});

export default mapStateToProps(ExpenseListFilters);