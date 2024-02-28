export interface ExpenseItem {
  id: number;
  description: string;
  amount: number;
  category: string;
  //Solution has category: string but then on the form you validate the strings
}

const ExpenseListItem = ({
  id,
  description,
  amount,
  category,
}: ExpenseItem) => {
  return (
    <ExpenseListItem
      id={id}
      description={description}
      amount={amount}
      category={category}
    />
  );
};

export default ExpenseListItem;
