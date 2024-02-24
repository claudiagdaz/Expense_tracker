interface FilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: FilterProps) => {
  return (
    <select
      className='form-select'
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value='All'>All Categories</option>
      <option value='Entertainment'>Entertainment</option>
      <option value='Groceries'>Groceries</option>
      <option value='Utilities'>Utilities</option>
    </select>
  );
};

export default ExpenseFilter;
