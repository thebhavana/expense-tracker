## 📦 Purpose of `ExpenseList.js`

This component:

* Accepts a list of expense objects
* Loops through them
* Renders one `ExpenseItem` for each
* Handles the case when there are no expenses

---

## ✅ Line-by-Line Breakdown

```js
import React from 'react';
import ExpenseItem from './ExpenseItem';
```

* Imports **React** for JSX usage.
* Imports the `ExpenseItem` component (the one you already created) so each expense can be displayed properly.

---

```js
function ExpenseList({ expenses, onEdit, onDelete }) {
```

* This is a **functional component**.
* It receives 3 props:

  * `expenses`: Array of all expense objects
  * `onEdit`: Function to handle when user clicks "Edit"
  * `onDelete`: Function to handle when user clicks "Delete"

---

### 🔍 Handling No Data

```js
if (expenses.length === 0) return <p>No expenses found.</p>;
```

* Checks if the `expenses` array is empty.
* If yes, shows a simple message instead of an empty UI.

---

### 🔁 Rendering List of Items

```js
return (
  <div className="expense-list">
    {expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        expense={expense}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);
```

* `expenses.map(...)`: Loops through each expense object.
* For each:

  * Creates an `ExpenseItem`
  * Passes down the data (`expense`) and the two event handlers (`onEdit`, `onDelete`)
  * `key={expense.id}` is used by React to optimize rendering. Each item must have a unique `key`.

---

```js
export default ExpenseList;
```

* This exports the component so it can be used in other files like `App.js`.

---

## ✅ Summary Table

| Part                 | Role                                                  |
| -------------------- | ----------------------------------------------------- |
| `expenses` prop      | Array of all current expenses                         |
| `onEdit`, `onDelete` | Passed down to `ExpenseItem` for functionality        |
| `.map()`             | Loops through each expense and renders it             |
| `key={expense.id}`   | React optimization for rendering lists                |
| Empty State          | Displays "No expenses found." when the array is empty |

---

## 🧠 What This Component Does:

Imagine this:

* You add 3 expenses → they appear here
* You delete one → it disappears here
* You edit one → changes appear here
* You filter/search → this component only shows matching results

All that is controlled via this central `ExpenseList`.