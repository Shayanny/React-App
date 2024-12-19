import Recipes from "./Recipes";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const ReadPage = () => {

    const[recipes , setRecipes] = useState([]); // State to store fetched recipes
    const [error, setError] = useState(null);  // State to handle errors


    useEffect(() => {
    
        axios.get('http://localhost:4000/api/recipes')
          .then((response) => {
              //console.log(response.data);
              setRecipes(response.data);
          })
            .catch((error) => {
                console.log(error);
                setError("Failed to fetch recipes."); // Set an error message

            });
    });

   
    return (
        <div style={styles.pageContainer}>
            <div style={styles.content}>
                <h1 style={styles.header}>Our Recipes</h1>
                <div style={styles.recipeGrid}>
                    <Recipes myRecipes={recipes} />
                </div>
            </div>
        </div>
    );
};



const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
    },
    content: {
        flex: '1 0 auto', // Allows the content to expand and push the footer to the bottom
        padding: '20px',
    },
    header: {
        textAlign: 'center',
        fontSize: '2rem',
        color: '#333',
        margin: '20px 0',
    },
    recipeGrid: {
        display: 'grid',
        flexDirection:'column',
        gap: '20px',
        padding: '20px',
    },
 
};

export default ReadPage;
