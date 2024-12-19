import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const RecipeItem = (props) => {

    //useEffect() is used to log props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("Recipe Item:", props.myrecipe);
    }, [props.myrecipe]); // Only run this effect when the myrecipe prop changes

    const styles = {
        container: {
            display: 'flex', // Align items horizontally
            gap: '20px', // Adds space between the image and summary
            alignItems: 'flex-start', // Aligns content at the top
        },
        summary: {
            flex: 1, // Ensures the summary takes up the remaining space
            padding: '10px', // Adds some padding around the text
            color: '#555', // Optional: Adjust text color for better readability
        },
        footer: {
            marginTop: '10px',
            fontStyle: 'italic',
            color: '#555',
        },
   

    };

    return (

        <Card>
            <Card.Header>{props.myrecipe.Title}</Card.Header>
            <Card.Body>
                <div style={styles.container}>

                    <img src={props.myrecipe.Poster}
                        alt={props.myrecipe.Title}
                        style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
                    />
                    <div style={styles.summary}>
                        <p>{props.myrecipe.Summary}</p>
                    </div>
                </div>
                <footer style={styles.footer}>{props.myrecipe.Time}<br></br>Calories : {props.myrecipe.Calories}</footer>
            </Card.Body>
            <Link to={"/Edit/" + props.myrecipe._id} className="btn btn-primary btn-sm" >Edit</Link>
        </Card>

    );
}



export default RecipeItem;