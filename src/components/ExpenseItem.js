
// components/ExpenseItem.js
import React from 'react';

function ExpenseItem({ expense, onEdit, onDelete }) {
  return (
    <div className="expense-item">
      <div>
        <strong>{expense.title}</strong> - ₹{expense.amount} <br />
        {expense.category} | {expense.date}
      </div>
      <div>
        <button onClick={() => onEdit(expense.id)}>Edit</button>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
