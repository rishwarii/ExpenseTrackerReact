import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  ///component which eill hold the prop as passed value as key value pairs
  /// and will return the react element which should be displayed here
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">${props.amt}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
//you have to tell react that to use css file present here this is necessary
