import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense/Expense";
import { useState } from "react";

const dummy_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_data);

  const updateItemsList = (expense) => {// expense is a parameterized data from newExpense.js
    setExpenses((prevExpenses) => {// this is dummy_data, which will be updated based on State.
      return [expense, ...prevExpenses]; // dummy_data is now updated with new expense using spread Operator
    });
  };

  return (
    <div>
      <NewExpense updateDetails={updateItemsList} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
