import { useEffect, useState } from "react";
import "./ShoppingList.css";
import { Expense } from "./Expense/Expense";

export const ShoppingList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // here fetch the content of expenses.json file and put
    // the response into our expenses variable
    fetch("http://localhost:3002/expenses")
      .then((response) => response.json())
      .then((response) => setExpenses(response));
  }, []);

  const updateItemQuantity = (item, quantity) => {
  const removeItem = (item) => {
    console.log(item);
    fetch(`http://localhost:3002/expenses/${item.id}`, {
      method: "DELETE",
    }).then(() => fetchExpenses());
    const updatedItem = {
      ...item,
      quantity: quantity,
    };

    const updatedExpenses = expenses.map((element) =>
      element === item ? updatedItem : element
    );

    setExpenses(updatedExpenses);
  };
  };
  const sumExpenses = (array) => {
    let result = 0;
    array.forEach((element) => (result += element.price * element.quantity));
    return result.toFixed(2);
  };

  const totalAmount = sumExpenses(expenses);
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
            <Expense
              key={item.id}
              item={item}
              callMeToUpdateItemQuantity={updateItemQuantity}
              removeItemFromList={removeItem}
            />
          ))}
        </tbody>
      </table>
      <h3>Total amount: {totalAmount}€</h3>
    </div>
  );
};
