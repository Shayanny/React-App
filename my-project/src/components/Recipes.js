import RecipeItem from "./RecipeItem";

const Recipes = (props) =>{
    return props.myRecipes.map(
        (recipe)=> {
            return <RecipeItem myrecipe={recipe} key ={recipe.imdbID}/>

        }
    );
}

export default Recipes;