import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "New TV",
    price: 10000,
    date: new Date(2020, 0, 31),
  },
  {
    id: 2,
    title: "Washing Machine",
    price: 8000,
    date: new Date("2020 March, 1"),
  },
  {
    id: 3,
    title: "Room Rent",
    price: 6000,
    date: new Date("2022 Feb, 28"),
  },
  {
    id: 4,
    title: "Buy Fruits",
    price: 1000,
    date: new Date("Dec 31, 2021"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div className="App">
      <ExpenseForm addExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
