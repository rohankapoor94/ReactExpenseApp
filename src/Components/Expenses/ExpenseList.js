import ExpanseItem from "./ExpanseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.expense.length === 0) {
    return <h2 className="expenses-list__fallback">"Found no Expenses"</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expense.map((exp) => (
        <ExpanseItem
          id={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
