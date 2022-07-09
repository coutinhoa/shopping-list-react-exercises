import { useEffect, useState } from "react";
import "./ShoppingList.css";
import { Expense } from "./Expense/Expense";

export const ShoppingList = () => {
  const [expenses, setExpenses] = useState([]);

  // here fetch the content of expenses.json file and put
  // the response into our expenses variable

  const fetchExpenses = () => {
    fetch("http://localhost:3002/expenses")
      .then((response) => response.json())
      .then((response) => setExpenses(response));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const removeItem = (item) => {
    console.log(item);
    fetch(`http://localhost:3002/expenses/${item.id}`, {
      method: "DELETE",
    }).then(() => fetchExpenses());

    //then receives a function that is gonna render fetchExpenses after the request succeeds
    //the same as .then(fetchExpenses);

    //const newList = expenses.filter((i) => i !== item);
    //setExpenses(newList);
  };

  //is the same as the PATCH below
  /*const updateItemQuantity = (item, quantity) => {
    const updatedItem = {
      ...item,
      quantity: quantity,
    };

    const updatedExpenses = expenses.map((element) =>
      element === item ? updatedItem : element
    );

    setExpenses(updatedExpenses);
  };*/

  //PATCH updates a single property from an existing object
  //patch does not need the the other properties of the object, that's why we don't use ...item

  const updateItemQuantity = (item, quantity) => {
    const updatedItem = {
      quantity: quantity,
    };

    fetch(`http://localhost:3002/expenses/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }).then(fetchExpenses);
  };
  //fecthExpenses already changes the state of the Expenses

  const addNewItem = () => {
    const fruits = [
      { name: "Watermelon", price: 0.99 },
      { name: "Lemon", price: 1 },
      { name: "Apple", price: 0.75 },
      { name: "Orange", price: 1.5 },
      { name: "Mango", price: 3 },
      { name: "Papaia", price: 5.55 },
    ];
    let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

    fetch(`http://localhost:3002/expenses/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: randomFruit.name,
        quantity: 1,
        price: randomFruit.price,
      }),
    }).then(() => fetchExpenses());
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
              updateQuantity={updateItemQuantity}
              removeItemFromList={removeItem}
            />
          ))}
          <tr>
            <td className="new-item" colSpan={4} onClick={addNewItem}>
              Add a new item
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Total amount: {totalAmount}€</h3>
    </div>
  );
};
