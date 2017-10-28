import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { addExpense } from '../actions/expenses';
import 'react-dates/lib/css/_datepicker.css';

const date = moment();
console.log(date.format('MMM Do YYYY'));

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        datePickerFocused: false
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onDateChange = (createdAt) => {
        console.log('ondatechange', createdAt);
        this.setState(() => ({ createdAt }))
    }
    onDatePickerFocusChange = ({ focused }) => {
        console.log('onfocuschange', focused);
        this.setState((prevState) => ({
            datePickerFocused: focused
        }));
    }
    handleAddExpense = (e) => {
        e.preventDefault();
        this.props.dispatch(addExpense({...this.state}));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddExpense}>
                    <input 
                        type="text" 
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placehoder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.datePickerFocused}
                        onFocusChange={this.onDatePickerFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.value}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default connect()(ExpenseForm);