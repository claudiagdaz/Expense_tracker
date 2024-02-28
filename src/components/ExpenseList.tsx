import { useState } from "react";
import { ExpenseItem } from "./ExpenseListItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

interface ExpenseListProps {
  expenses: ExpenseItem[];
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  const [expensesList, setExpensesList] = useState<ExpenseItem[]>(expenses);

  const [selectedCategory, setSelectedCategory] = useState("All");

  if (expensesList.length === 0) return null;

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
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpensesList([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
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
