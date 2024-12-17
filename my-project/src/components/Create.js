import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const CreatePage = () => {

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [calories, setCalories] = useState('');
    const [tasks , setTasks]  = useState('');
    const [poster , setPoster]  = useState('');


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
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.data));

    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.formContainer}>
                <h3 style={styles.header}>Recipe Submition Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Add Recipe Title: </label>
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
                        <input type="text"
                            className="form-control"
                            value={tasks}
                            onChange={(e) => { setTasks(e.target.value) }}
                        />
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
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif',
    },
    formContainer: {
        backgroundColor: 'white',
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
