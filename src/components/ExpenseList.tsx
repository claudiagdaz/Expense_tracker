import { useState } from "react";
import { ExpenseItem } from "./ExpenseListItem";
import ExpenseFilter from "./ExpenseFilter";

const expensesExample: ExpenseItem[] = [
  { id: 10, description: "Milk", amount: 5, category: "Groceries" },
  { id: 20, description: "Cinema", amount: 15, category: "Entertainment" },
  { id: 30, description: "Gas", amount: 20, category: "Utilities" },
  { id: 40, description: "Water", amount: 50, category: "Utilities" },
];

//const emptyExpenses: ExpenseItem[] = [];

const ExpenseList = () => {
  const [expensesList, setExpensesList] =
    useState<ExpenseItem[]>(expensesExample);

  const [selectedCategory, setSelectedCategory] = useState("All");

  if (expensesList.length === 0) return null;

  // const visibleExpenses = selectedCategory
  //   ? expensesList.filter((expense) => expense.category === selectedCategory)
  //   : expensesList;

  const visibleExpenses =
    selectedCategory === "All"
      ? expensesList
      : expensesList.filter((expense) => expense.category === selectedCategory);

  const onDelete = (expenses: ExpenseItem[], selectedExpense: ExpenseItem) => {
    setExpensesList(
      expenses.filter((expense) => expense.id !== selectedExpense.id)
    );
  };

  return (
    <>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {visibleExpenses.map((expense) => (
            <tr key={expense.id}>
              <th>{expense.description}</th>
              <th>${expense.amount}</th>
              <th>{expense.category}</th>
              <th>
                <button
                  onClick={() => {
                    onDelete(visibleExpenses, expense);
                  }}
                  className='btn btn-outline-danger'
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {visibleExpenses
                .reduce((sum, expense) => sum + expense.amount, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
