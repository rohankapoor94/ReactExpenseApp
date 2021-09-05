import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  // const[enteredTitle,setEnteredTitle]=useState("");
  // const[enteredAmount,setEnteredAmount]=useState("");
  // const[enteredDate,setEnteredDate]=useState("");
  const [enteredUserInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  function amountChangeHandler(e) {
    // setEnteredAmount(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  }
  function dateChangeHandler(e) {
    // setEnteredDate(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const values = {
      title: enteredUserInput.enteredTitle,
      date: new Date(enteredUserInput.enteredDate),
      amount: enteredUserInput.enteredAmount,
      id: Math.random() * 100,
    };
    props.onForSavingData(values);
    // console.log(values);
    setUserInput({ enteredDate: "", enteredAmount: "", enteredTitle: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredUserInput.enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="10"
            step="1"
            value={enteredUserInput.enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2010-01-01"
            max="2031-11-31"
            value={enteredUserInput.enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
