import React, { useState } from 'react';
import "./NewExpense.css";

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, resetEditMode]= useState(false);

    const ElementToDisplay = () => {
        resetEditMode(true);
    }

    const resetEditState = () => {
        resetEditMode(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { 
            ...enteredExpenseData, // data from Expense Form Component
            id: Math.random().toString()
        }
        props.updateDetails(expenseData); // passing the new data to Expense component
        resetEditMode(false);
    }
    return (
        <div className="new-expense">
            {!showForm && <button onClick={ElementToDisplay}> Add Expense </button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={resetEditState}/>}
        </div>
    )
}

export default NewExpense;