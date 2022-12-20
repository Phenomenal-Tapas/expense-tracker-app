import React, { useState } from "react";
import {
  ADD_EXPENSE,
  EXIT_BUTTON,
  DATE,
  PRICE,
  TITLE,
} from "../constant/constant";
import "../styles/Form.css";

const Form = ({ onSaveExpenseData, onCancel }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      price: +price,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);

    if (title.length > 0 && price.length > 0 && date.length > 0) {
      alert("Thank you for your submission!");
    }

    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form_controls">
        <div className="form_control">
          <label htmlFor="title">{TITLE}</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form_control">
          <label htmlFor="price">{PRICE}</label>
          <input
            type="number"
            min="0"
            id="price"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="form_control">
          <label htmlFor="date">{DATE}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="form_submit">
        <button type="button" onClick={onCancel}>
          {EXIT_BUTTON}
        </button>
        <button type="submit">{ADD_EXPENSE}</button>
      </div>
    </form>
  );
};

export default Form;
