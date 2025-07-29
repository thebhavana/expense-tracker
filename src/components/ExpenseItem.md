## ✅ Purpose of `ExpenseItem.js`

This component:

* Represents a **single expense item**
* Displays expense details: **title, amount, category, date**
* Provides **Edit** and **Delete** buttons
* Communicates actions back to the parent (`ExpenseList`) via props

---

## 📄 Code Breakdown

```js
import React from 'react';
```

* Imports **React** so you can use JSX and create components.

---

```js
function ExpenseItem({ expense, onEdit, onDelete }) {
```

* Defines a functional component `ExpenseItem`.
* It receives 3 props:

  * `expense`: An object (with `id`, `title`, `amount`, etc.)
  * `onEdit`: A function passed from parent to trigger edit mode
  * `onDelete`: A function to delete the item

---

### 🔽 JSX: What the component displays

```jsx
<div className="expense-item">
```

* A container `div` with a class used for styling.

---

#### 🧾 Expense Information

```jsx
<div>
  <strong>{expense.title}</strong> - ₹{expense.amount} <br />
  {expense.category} | {expense.date}
</div>
```

* Displays:

  * **Title** in bold
  * **Amount** with ₹ symbol
  * **Category** and **Date** on the next line

🔎 Example:

```
Groceries - ₹500
Food | 2025-07-28
```

---

#### ✏️ Edit and ❌ Delete Buttons

```jsx
<div>
  <button onClick={() => onEdit(expense.id)}>Edit</button>
  <button onClick={() => onDelete(expense.id)}>Delete</button>
</div>
```

* `onEdit(expense.id)` → Triggers the edit mode in `App.js` with this item's ID
* `onDelete(expense.id)` → Tells parent to remove this item from the list

---

```js
export default ExpenseItem;
```

* Makes this component available for import elsewhere (like in `ExpenseList.js`)
