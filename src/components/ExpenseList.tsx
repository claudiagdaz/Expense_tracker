const ExpenseList = () => {
  return (
    <>
      <table className='table table-stripped-columns'>
        <thead>
          <tr>
            <th scope='col'>Descrption</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Milk</th>
            <th>$5.00</th>
            <th>Groceries</th>
            <th>
              <button className='btn btn-danger'>Delete</button>
            </th>
          </tr>
          <tr>
            <th>Movie</th>
            <th>$15.00</th>
            <th>Entertainment</th>
            <th>
              <button className='btn btn-danger'>Delete</button>
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>$123.00</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
