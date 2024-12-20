import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const CreatePage = () => {

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [calories, setCalories] = useState('');
    const [tasks, setTasks] = useState('');
    const [poster, setPoster] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();
        const recipe = {
            Title: title,
            Time: time,
            Calories: calories,
            Summary: tasks,
            Poster: poster
        };
        console.log(recipe);

        axios.post('http://localhost:4000/api/recipes', recipe)
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


    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <h3 style={styles.header}>Recipe Submition Form</h3>
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
                            value="Submit Recipe"
                            className="btn btn-dark"
                        />
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
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
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



export default CreatePage;
