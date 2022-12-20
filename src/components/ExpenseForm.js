import React, { useState } from "react";
import Form from "./common/Form";
import { ADD_NEW_EXPENSE } from "./constant/constant";
import "./styles/ExpenseForm.css";

const ExpenseForm = ({ addExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveExpenseDataHandler = (getExpenseData) => {
    const expenseData = {
      ...getExpenseData,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
    setIsFormOpen(false);
  };

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  const closeFormHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="expense-form">
      {!isFormOpen && (
        <button onClick={openFormHandler}>{ADD_NEW_EXPENSE}</button>
      )}
      {isFormOpen && (
        <Form
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default ExpenseForm;
