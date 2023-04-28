import logo from './logo.svg';
import './App.css';
import Card from "./Card"

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2"></Card>
      <Card h3="second card's h3"></Card>
      <Card h2 = "third card h2"></Card>
    </div>
  );
}

export default App;
