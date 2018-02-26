import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpense = ({ dispatch }) => {
    let textValue = '';
    return (
        <div>
            <input type="text" 
                onChange={(e) => {
                    textValue = e.target.value;
                }}
            />
            <button onClick={(e) => {
                dispatch(addExpense({
                    description: textValue
                }));
            }}
            >
                Add
            </button>
        </div>
    )
};


// const mapStateToProps = (state) => {
//     return {
//         description: '',
//         note: '',
//         amount: 0,

//     }
// };

export default connect()(AddExpense);