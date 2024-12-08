import RecipeItem from "./RecipeItem";

const Recipes = (props) => {

    // Safeguard against undefined or null props
    const { myRecipes = [] } = props;

    if (myRecipes.length === 0) {
        return <p>No recipes available.</p>; // Display fallback text when there are no recipes
    }

    return props.myRecipes.map(
        (recipe) => {
            return <RecipeItem myrecipe={recipe} key={recipe._id} />

        }
    );
}

export default Recipes;