import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import "./ExpensesFilter.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, selectedYear] = useState("2021");
  const changeFilterValue = (year) => {
    selectedYear(year);
    console.log(year);
  };
  const filteredYears = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  }); 
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterValue}
      />
      <ExpensesChart expenses={filteredYears} />
      <ExpenseList expense={filteredYears} />
      
      {/* {props.items.each(exp=><ExpanseItem title={exp.title} amount={exp.amount} date={exp.date} />)} */}
    </Card>
  );
};
export default Expenses;
