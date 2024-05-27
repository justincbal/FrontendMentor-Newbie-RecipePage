import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <img src="image-omelette.jpeg" alt="omeletteImage" />
        <h1 className="recipeName">Simple Omelette Recipe</h1>
        <p className="recipeDescription">
          An easy and quick dish, perfect for any meal. The classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <section className="preparationTime">
          <h3 className="secHead">Preparation time</h3>
          <ul>
            <li>
              <b>Total:</b> Approximately 10 minutes
            </li>
            <li>
              <b>Preparation:</b> 5 minutes
            </li>
            <li>
              <b>Cooking:</b> 5 minutes
            </li>
          </ul>
        </section>

        <section className="ingredients border">
          <h2 className="secHead">Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        <section className="instructions border">
          <h2 className="secHead">Instructions</h2>
          <ol>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <b>Heat the pan:</b> Place a non-stick pan over medium heat and
              add butter or oil.
            </li>
            <li>
              <b>Cook the omelette:</b> Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>
            <li>
              <b>Add filling (optional):</b> When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
              chosen fillings over one half of the omelette.
            </li>
            <li>
              <b>Fold and serve:</b> As the omlette continues to cook, carefully
              lift one edge and fold it over the fillings. Let it cook for
              another minute, then slide it onto a plate.
            </li>
            <li>
              <b>Enjoy: </b>Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </section>

        <section className="nutrition">
          <h2 className="secHead">Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without
            additional fillings.
          </p>
          <div className="table">
            <div className="tableRow">
              <p>Calories</p>
              <p className="brownBold">277kcal</p>
            </div>
            <div className="tableRow">
              <p>Carbs</p>
              <p className="brownBold">0g</p>
            </div>
            <div className="tableRow">
              <p>Protein</p>
              <p className="brownBold">20g</p>
            </div>
            <div className="tableRow" style={{borderBottom:0}}>
              <p>Fat</p>
              <p className="brownBold">22g</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
