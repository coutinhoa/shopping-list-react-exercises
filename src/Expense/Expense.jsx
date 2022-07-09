import React from "react";
import "./Expense.css";
import { Select } from "../components/Select/Select";

export const Expense = ({ item }) => {
  const quantityOptions = [1, 2, 3, 4, 5, 6];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const deleteExpense = () => {
    console.log(`deleting item ${item.name}`);
  };

  return (
    <tr className="expense-item">
      <td>{item.name}</td>
      <td className="align-text-center">
        <Select
          name="item-quantity"
          options={quantityOptions}
          value={item.quantity}
          onChange={handleChange}
        />
      </td>
      <td className="align-text-center">
        {(item.price.toFixed(2) * item.quantity).toFixed(2)} €
      </td>
      <td className="delete-action" onClick={deleteExpense}>
        X
      </td>
    </tr>
  );
};
