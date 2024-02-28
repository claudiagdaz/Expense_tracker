import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import { ExpenseItem } from "./components/ExpenseListItem";
import { ExpenseFormData } from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const expensesExample: ExpenseItem[] = [
  { id: 1, description: "Milk", amount: 5, category: "Groceries" },
  { id: 2, description: "Cinema", amount: 15, category: "Entertainment" },
  { id: 3, description: "Gas", amount: 20, category: "Utilities" },
  { id: 4, description: "Water", amount: 50, category: "Utilities" },
  { id: 5, description: "Concert", amount: 50, category: "Entertainment" },
];

function App() {
  const [expensesList, setExpensesList] = useState(expensesExample);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleExpenses =
    selectedCategory === "All"
      ? expensesList
      : expensesList.filter((expense) => expense.category === selectedCategory);

  const handleDelete = (id: number) => {
    setExpensesList(visibleExpenses.filter((expense) => expense.id !== id));
  };

  const handleSubmit = (expense: ExpenseFormData) => {
    const newExpense = { ...expense, id: expensesList.length + 1 };
    setExpensesList([...expensesList, newExpense]);
  };

  return (
    <>
      <h1 className='heading'>Expense Tracker</h1>
      <div className='mb-3'>
        <ExpenseForm onSubmit={handleSubmit} />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />{" "}
      </div>
      <div className='mb-3'>
        <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
