import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expense.css";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [updatedYear, filteredYear] = useState("2021");

  const filterYearChange = (selectedYear) => {
    filteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === updatedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={updatedYear} onYearChange={filterYearChange} />
      <ExpensesChart expense={filteredExpense} />
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
};

export default Expense;
