import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const EditPage = () => {

    // Get the recipe ID from the URL
    let { id } = useParams();

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [calories, setCalories] = useState('');
    const [tasks, setTasks] = useState('');
    const [poster, setPoster] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/recipes/' + id)
            .then((response) => {
                setTitle(response.data.Title || ''); //Fallback to empty string 
                setTime(response.data.Time || '');
                setCalories(response.data.Calories || '');
                setTasks(response.data.Summary || '')
                setPoster(response.data.Poster || '');
            })
            .catch((error) => {
                console.log('Error fetching recipe:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = { Title: title, Time: time, Calories: calories, Summary: tasks, Poster: poster };
        console.log(newRecipe)

        axios.put('http://localhost:4000/api/recipes/' + id, newRecipe)
            .then((res) => {

                // Clear form inputs
                setTitle('');
                setTime('');
                setCalories('');
                setTasks('');
                setPoster('');

                // Redirect after a short delay
                setTimeout(() => navigate('/read'), 2000);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/recipes/' + id)
            .then(() => {
                // Redirect after a short delay
                setTimeout(() => navigate('/read'), 2000);
            })
            .catch((error) => {
                console.error("Error deleting recipe:", error);
            });
    };


    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <h3 style={styles.header}>Edit Your Recipe</h3>
                <h7 style={styles.header}>Please provide an input for each box</h7>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label><br></br>Add Recipe Title: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add the amount of calories: </label>
                        <input type="text"
                            className="form-control"
                            value={calories}
                            onChange={(e) => { setCalories(e.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add the amount of time required: </label>
                        <input type="text"
                            className="form-control"
                            value={time}
                            onChange={(e) => { setTime(e.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Please write the instructions: </label>
                        <textarea
                            className="form-control"
                            value={tasks}
                            onChange={(e) => setTasks(e.target.value)}
                            rows="8" // Adjust height with the number of rows
                            style={{
                                resize: 'vertical', // Allow vertical resizing only
                            }}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Please enter the image: </label>
                        <input type="text"
                            className="form-control"
                            value={poster}
                            onChange={(e) => { setPoster(e.target.value) }}
                        />
                    </div>
                    <div style={styles.submitContainer}>
                        <input
                            type="submit"
                            value="Edit Recipe"
                            className="btn btn-dark"
                        />
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Center vertically in full viewport
        backgroundImage: 'url("https://st2.depositphotos.com/1013886/9286/i/950/depositphotos_92868544-stock-photo-healthy-food-background.jpg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // White with slight transparency
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
        marginLeft: '50px', // Move form slightly to the right
        marginBottom: '150px'

    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    },
    submitContainer: {
        textAlign: 'center',
        marginTop: '20px',
    },
};


export default EditPage;