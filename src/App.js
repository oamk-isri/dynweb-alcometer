import './App.css';
import { useState } from "react";

function App() {
  return (
    <div>
      {Alcometer()}
    </div>
  );
}

function Alcometer() {
  const [weight, setWeight] = useState(60);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let alcoholLevel = 0;

    if (gender === "male") {
      alcoholLevel = gramsLeft / (weight * 0.7);
    } else {
      alcoholLevel = gramsLeft / (weight * 0.6);
    }

    if (alcoholLevel < 0 ) {
      alcoholLevel = 0;
    }

    setResult(alcoholLevel.toFixed(2));
  }

  return (
    <div  className="App">
      <div class="app-container">

      <h2>Calculating alcohol blood level</h2>
      <form class="form-container" onSubmit={handleSubmit}>
        
        <div>
          <label>Weight: </label>
          <input type="number" min="0" value={weight}
            onChange={event => setWeight(event.target.value)}/>    
        </div>
        <div>
          <label>Bottles: </label>
          <select onChange={event => setBottles(event.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Time: </label>
          <select onChange={event => setTime(event.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Gender: </label>
          <input type="radio" value="male" name="gender"
            onChange={event => setGender(event.target.value)}/>
          <label>Male </label>
          <input type="radio" value="female" name="gender"
            onChange={event => setGender(event.target.value)}/>
          <label>Female</label>
        </div>
        <button>Calculate</button>
      </form>
      
      <div class="form-container">
      Result: {result}
      </div>
    </div>
    </div>
    )
}

export default App;
