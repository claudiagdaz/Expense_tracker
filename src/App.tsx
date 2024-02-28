import ExpenseList from "./components/ExpenseList";
import { ExpenseItem } from "./components/ExpenseListItem";

function App() {
  const expensesExample: ExpenseItem[] = [
    { id: 10, description: "Milk", amount: 5, category: "Groceries" },
    { id: 20, description: "Cinema", amount: 15, category: "Entertainment" },
    { id: 30, description: "Gas", amount: 20, category: "Utilities" },
    { id: 40, description: "Water", amount: 50, category: "Utilities" },
  ];

  return (
    <>
      <h1 className='heading'>Expense Tracker</h1>
      <div className='mb-3'>
        <ExpenseList expenses={expensesExample} />
      </div>
    </>
  );
}

export default App;
