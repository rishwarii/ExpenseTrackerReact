import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (event) => {
  //  title change

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setamountEntered] = useState("");
  const [enteredDate, setdateEntered] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setamountEntered(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setdateEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredTitle("");
    setamountEntered("");
    setdateEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__controls">
          <label htmlFor="">Date </label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2022-01-01"
            max="2024-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button>Add Expenses </button>
    </form>
  );
};

export default ExpenseForm;

// const [userEntered, setuserEntered] = useState({
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });

// const titleChangeHandler = (event) => {
//   setuserEntered({
//     ...userEntered,
//     enteredTitle: event.target.value,
//   });
// };
// // date change
// const dateChangeHandler = (event) => {
//   setuserEntered({
//     ...userEntered,
//     enteredDate: event.target.value,
//   });
// };

// // amount change

// const amountChangeHandler = (event) => {
//   setuserEntered({
//     ...userEntered,
//     enteredAmount: event.target.value,
//   });
// };
