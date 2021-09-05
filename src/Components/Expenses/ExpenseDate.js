import Card from "../UI/Card";
import "./ExpenseDate.css";
const ExpenseDate=(props)=> {
  const expenseMonth = props.date.toLocaleString("en-us", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-us", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();
  return (
    <Card className="expense-date">
      <div className=".expense-date__month">{expenseMonth}</div>
      <div className=".expense-date__year">{expenseYear}</div>
      <div className=".expense-date__day">{expenseDay}</div>
    </Card>
  );
}
export default ExpenseDate;
