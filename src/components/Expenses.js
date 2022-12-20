import React, { useState } from "react";
import { NOT_FOUND } from "./constant/constant";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        defaultYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpenses} />
      {filterExpenses.length > 0 ? (
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))
      ) : (
        <h2 className="expenses_text">{NOT_FOUND}</h2>
      )}
    </div>
  );
}

export default Expenses;
