/* eslint-disable react/prop-types */
import { useState } from "react";
function RecipeContainer({recipe, deleteRecipe}) {
  const [isEditing , setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(recipe.title);
  const [editedDescription , setEditedDescription]= useState(recipe.description);
  const [editedIngredients, setEditedIngredients] = useState(recipe.ingredients);
  const [editedDirections, setEditedDirections]= useState(recipe.directions);
  function toggledEditMode(){
    setIsEditing(!isEditing);
  }
  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
      >
        <div className="recipe">
          <button onClick={toggledEditMode}>{isEditing ? 'Save' : 'Edit'}</button>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
          
          <p>
            {isEditing ? <h2> <input name ="input" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/> </h2>:(<h2>{editedTitle}</h2>)}
            <strong>Description:</strong>
            {isEditing ? <h2> <input name ="Description" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}/> </h2>:(<h2>{editedDescription}</h2>)}
          </p>
          <p>
            <strong>Ingredients:</strong> 
            {isEditing ? <h2> <input name ="ingredients" value={editedIngredients} onChange={(e) => setEditedIngredients(e.target.value)}/> </h2>:(<h2>{editedIngredients}</h2>)}
          </p>
          <p>
            <strong>Directions:</strong> 
            {isEditing ? <h2> <input name ="Directions" value={editedDirections} onChange={(e) => setEditedDirections(e.target.value)}/> </h2>:(<h2>{editedDirections}</h2>)}
          </p>
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
