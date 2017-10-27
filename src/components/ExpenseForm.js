import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: 0
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