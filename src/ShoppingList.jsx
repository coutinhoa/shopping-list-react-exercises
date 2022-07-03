import { useEffect, useState } from "react";
import "./ShoppingList.css";
import { Expense } from "./Expense/Expense";

export const ShoppingList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // here fetch the content of expenses.json file and put
    // the response into our expenses variable
    fetch("/expenses.json")
      .then((response) => response.json())
      .then((response) => setExpenses(response));
  }, []);

  return (
    <div className="shopping-list-container">
      <h2>My Shopping List</h2>
      <table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <Expense key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <h3>Total amount: 1.00 €</h3>
    </div>
  );
};
