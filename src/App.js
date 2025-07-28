// App.js
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    if (editingExpense) {
      const updated = expenses.map((exp) =>
        exp.id === expense.id ? expense : exp
      );
      setExpenses(updated);
      setEditingExpense(null);
    } else {
      setExpenses([...expenses, { ...expense, id: uuidv4() }]);
    }
  };

  const handleEditExpense = (id) => {
    const toEdit = expenses.find((exp) => exp.id === id);
    setEditingExpense(toEdit);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || expense.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <ExpenseForm onSave={handleAddExpense} editingExpense={editingExpense} />
      <ExpenseList
        expenses={filteredExpenses}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
}

export default App;

