import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <>
      <h1 className='heading'>Expense Tracker</h1>
      <div className='mb-5'>
        <ExpenseForm />
      </div>
      <div className='mb-3'>
        <ExpenseList />
      </div>
    </>
  );
}

export default App;
