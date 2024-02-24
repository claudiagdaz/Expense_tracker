import { useState } from "react";
import { ExpenseItem } from "./ExpenseListItem";

// export interface ExpenseListProps {
//   expenses: ExpenseItem[]
// }

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

  const [categoryFilter, setCategoryFilter] = useState("Utilities");

  if (expensesList.length === 0) return null;

  const onDelete = (expenses: ExpenseItem[], selectedExpense: ExpenseItem) => {
    setExpensesList(
      expenses.filter((expense) => expense.id !== selectedExpense.id)
    );
  };

  const filterList = (expenses: ExpenseItem[]) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.category === categoryFilter
    );
    setExpensesList(filteredExpenses);
    //setExpensesList(expenses.map(expense => expense.category === categoryFilter ? ...expense : ))
  };
  return (
    <>
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
          {expensesList.map((expense) => (
            <tr key={expense.id}>
              <th>{expense.description}</th>
              <th>${expense.amount}</th>
              <th>{expense.category}</th>
              <th>
                <button
                  onClick={() => {
                    onDelete(expensesList, expense);
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
              {expensesList
                .reduce((sum, expense) => sum + expense.amount, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <button
        className='btn btn-primary'
        onClick={() => {
          setCategoryFilter("Utilities");
          filterList(expensesExample);
        }}
      >
        Utilities
      </button>
      <button
        className='btn btn-primary'
        onClick={() => {
          setCategoryFilter("Groceries");
          filterList(expensesExample);
        }}
      >
        Groceries
      </button>
      <button
        className='btn btn-primary'
        onClick={() => {
          setCategoryFilter("Entertainment");
          filterList(expensesExample);
        }}
      >
        Entertainment
      </button>
    </>
  );
};

export default ExpenseList;
