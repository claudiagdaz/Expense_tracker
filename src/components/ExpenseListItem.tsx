export interface ExpenseItem {
  id: number;
  description: string;
  amount: number;
  category: "Entertainment" | "Groceries" | "Utilities";
  //Solution has category: string
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
