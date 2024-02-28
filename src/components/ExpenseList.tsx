import { ExpenseItem } from "./ExpenseListItem";

interface ExpenseListProps {
  expenses: ExpenseItem[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0) return null;
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
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <th>{expense.description}</th>
              <th>${expense.amount}</th>
              <th>{expense.category}</th>
              <th>
                <button
                  onClick={() => {
                    onDelete(expense.id);
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
              {expenses
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
