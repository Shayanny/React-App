import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const CreatePage = () => {

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [calories, setCalories] = useState('');
    const [tasks , setTasks]  = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        const recipe = {title , time , calories , tasks};
        console.log(recipe);

    }

    return (
        <div>
            <h3>Hello from create component!</h3>
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
                <div>
                    <input type="submit" value="Submit Recipe"></input>
                </div>
            </form>
        </div>
    );
};



export default CreatePage;
