// import { useState } from "react";
import "./ExpanseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";
const ExpanseItem = (props) => {
  const expenseAmount = props.amount;
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("title");
  // };
  return (
    <li>
      <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <Card className="expense-item__price">{expenseAmount} Rs</Card>
      {/* <button onClick={clickHandler}>CLick</button> */}
    </Card>
    </li>
  );
};
export default ExpanseItem;
