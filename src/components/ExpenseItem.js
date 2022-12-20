import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./styles/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2 className="expense-item_title">{props.title}</h2>
        <div className="expense-item_price">&#8377; {props.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
