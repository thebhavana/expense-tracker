
// components/ExpenseForm.js
import React, { useEffect, useState } from 'react';

function ExpenseForm({ onSave, editingExpense }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: 'Food',
    date: ''
  });

  useEffect(() => {
    if (editingExpense) {
      setForm(editingExpense);
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.date) return;
    onSave(form);
    setForm({ title: '', amount: '', category: 'Food', date: '' });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      <button type="submit">{editingExpense ? 'Update' : 'Add'} Expense</button>
    </form>
  );
}

export default ExpenseForm;




