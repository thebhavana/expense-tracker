## ✅ Purpose of `ExpenseForm.js`

This component is responsible for:

* Displaying a form to **add a new expense** or **edit an existing one**
* Managing form input fields (title, amount, category, date)
* Submitting the data to the parent component (`App.js`) via `onSave()`

---

## 🔍 Full Breakdown

```js
import React, { useEffect, useState } from 'react';
```

* Import React and its **hooks**.
* `useState` is used for form state.
* `useEffect` is used to fill the form when editing.

---

```js
function ExpenseForm({ onSave, editingExpense }) {
```

* A **functional component** that receives two props:

  * `onSave`: function to save the new/edited expense
  * `editingExpense`: the current expense object being edited (or `null` if adding)

---

### 🟩 State: `form`

```js
const [form, setForm] = useState({
  title: '',
  amount: '',
  category: 'Food',
  date: ''
});
```

* Initial form values when the user is **adding a new expense**
* Controlled inputs: Each form field is linked to this state

---

### 🟦 Prefill form when editing

```js
useEffect(() => {
  if (editingExpense) {
    setForm(editingExpense);
  }
}, [editingExpense]);
```

* If `editingExpense` changes, update the form with its data
* This ensures the form is pre-filled when editing an existing expense

---

### 🟨 Handle input change

```js
const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
```

* Generic handler for all form inputs
* Uses `name` attribute to dynamically update corresponding field in `form` object

🧠 Example:

```js
e.target.name = 'title'
e.target.value = 'Pizza'
```

➡️ Updates form like: `{ ..., title: 'Pizza' }`

---

### 🟥 Handle form submit

```js
const handleSubmit = (e) => {
  e.preventDefault();
  if (!form.title || !form.amount || !form.date) return;
  onSave(form);
  setForm({ title: '', amount: '', category: 'Food', date: '' });
};
```

* Prevents page reload
* Validates required fields (`title`, `amount`, `date`)
* Calls `onSave(form)` to **add or update** the expense
* Resets the form after saving

---

## 🧾 JSX: The Form UI

```jsx
<form className="expense-form" onSubmit={handleSubmit}>
```

* Triggers `handleSubmit` when the user clicks the button

### 🧠 Controlled Inputs

Each input is linked to the `form` state and updates it with `onChange`:

```jsx
<input
  type="text"
  name="title"
  placeholder="Title"
  value={form.title}
  onChange={handleChange}
/>
```

Other fields (amount, category, date) follow the same pattern.

---

### ✅ Submit Button Label

```jsx
<button type="submit">
  {editingExpense ? 'Update' : 'Add'} Expense
</button>
```

* Shows **"Add Expense"** when creating a new one
* Shows **"Update Expense"** when editing

---

## 📦 Exports the Component

```js
export default ExpenseForm;
```

* So you can use `<ExpenseForm />` in `App.js`
