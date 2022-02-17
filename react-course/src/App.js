import Expenses from "./components/Expenses/Expenses";

function App() {
  const expense = [
    {
      id: "E1",
      title: "Toilet Paper",
      amount: 2300,
      date: new Date(2020, 3, 4),
    },

    {
      id: "E2",
      title: "Car Insurance ",
      amount: 2300,
      date: new Date(2020, 3, 4),
    },
    {
      id: "E3",
      title: "Chocolate ",
      amount: 2300,
      date: new Date(2020, 3, 4),
    },
    {
      id: "E4",
      title: "Food",
      amount: 2300,
      date: new Date(2020, 3, 4),
    },
  ];

  return (
    <div>
      <h2>Lets Get Started!</h2>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
