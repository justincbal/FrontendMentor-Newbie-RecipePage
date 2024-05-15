import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <img src="../assets/images/image-omelette.jpeg" alt="omeletteImage" />
        <h1 className="recipeName">Simple Omelette Recipe</h1>
        <p className="recipeDescription">
          An easy and quick dish, perfect for any meal. The classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <section className="preparationTime">
          <h3 className="prepHeader">Preparation time</h3>
          <ul>
            <li><b>Total:</b> Approximately 10 minutes</li>
            <li><b>Preparation:</b> 5 minutes</li>
            <li><b>Cooking:</b> 5 minutes</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
