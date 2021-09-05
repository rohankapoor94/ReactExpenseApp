import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  //   let expenseData;
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const iGotData = (expense) => {
    const expenseData = expense;
    // console.log("Expense",expenseData);
    props.onForSavingD(expenseData);
    setIsEditing(false);
    // console.log(expenseData);
  };
  // if(isEditing===true){
  //   return <div className="new-expense"><ExpenseForm onForSavingData={iGotData} onCancel={stopEditingHandler} /></div>
  // }
  // else{
  //   return <div className="new-expense"><button onClick={startEditingHandler}>Add New Expense</button></div>
  // }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onForSavingData={iGotData} onCancel={stopEditingHandler} />}
    </div>
  );
};
export default NewExpense;
