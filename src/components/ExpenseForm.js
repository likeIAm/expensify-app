import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { addExpense } from '../actions/expenses';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        datePickerFocused: false,
        error: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onDateChange = (createdAt) => {
        if (createdAt !== null) {
            this.setState(() => ({ createdAt }));
        }
    }
    onDatePickerFocusChange = ({ focused }) => {
        this.setState((prevState) => ({
            datePickerFocused: focused
        }));
    }
    handleAddExpense = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            const expense = {...this.state};
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddExpense}>
                    {this.state.error && <p>{this.state.error}</p>}
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
                        required={true}
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