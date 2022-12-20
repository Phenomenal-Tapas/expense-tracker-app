import React from "react";
import { FILTER_BY_YEAR, OPTION } from "./constant/constant";
import "./styles/ExpenseFilter.css";

const ExpenseFilter = ({ defaultYear, onChangeFilter }) => {
  const changeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter_control">
        <label>{FILTER_BY_YEAR}</label>
        <select value={defaultYear} onChange={changeHandler}>
          <option value="2022">{OPTION[0]}</option>
          <option value="2021">{OPTION[1]}</option>
          <option value="2020">{OPTION[2]}</option>
          <option value="2019">{OPTION[3]}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
