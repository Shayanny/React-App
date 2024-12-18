import Recipes from "./Recipes";
import { useEffect, useState } from "react";
import axios from "axios";

const ReadPage = () => {

    const[recipes , setRecipes] = useState([]); // State to store fetched recipes
    const [error, setError] = useState(null);  // State to handle errors


    useEffect(() => {
    
        axios.get('http://localhost:4000/api/recipes')
          .then((response) => {
              console.log(response.data);
              setRecipes(response.data);
          })
            .catch((error) => {
                console.log(error);
                setError("Failed to fetch recipes."); // Set an error message

            });
    });

   
    return (
        <div style={styles.container}>
            <Recipes myRecipes ={recipes}/>
        </div>
    );
};



const styles = {
    container: {
        //display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    header: {
        fontSize: '2rem',
        color: '#333',
    },
    paragraph: {
        fontSize: '1rem',
        color: '#555',
    },
 
};

export default ReadPage;
