const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const multer = require('multer')

const app = express();
const port = 4000;


//BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Error Handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//MongoDB Connection
mongoose.connect('mongodb+srv://shayanny4:Shemoonspell148%21@cluster4444.vpjup.mongodb.net/Recipes');


// Multer Setup for Memory Storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Recipe Schema and Model
const recipeSchema = new mongoose.Schema({
    Title: String,
    Time: String,
    Calories: String,
    Summary: String,
    Poster: String,

});

// Create a Mongoose model from the schema
const Recipe = mongoose.model('Recipe', recipeSchema);


//Set up middleware to serve all static files (CSS, JS, etc.) from a public directory.
app.use(express.static('public'));


//Method to retreive all recipes
app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes', error });
    }
});


//method to retrieve a specific a recipe by its ID
app.get('/api/recipes/:id', async (req, res) => {

    //Find the recipe by id
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipe', error });
    }
}
);

//Create new recipe
app.post('/api/recipes', async (req, res) => {

    try {
        const { Title, Time, Calories, Summary, Poster } = req.body;

        // Validate incoming data
        if (!Title || !Time || !Calories || !Summary || !Poster) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newRecipe = new Recipe({ Title, Time, Calories, Summary, Poster });
        await newRecipe.save();

        res.status(201).json({ message: 'Recipe created successfully', Recipe: newRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Error updating recipe', error });
    }
});


//Serverside code for edit


app.put('/api/recipes/:id', async (req, res) => {
    try {
        const { Title, Time, Calories, Summary, Poster } = req.body;

        // Validate incoming data
        if (!Title || !Time || !Calories || !Summary || !Poster) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { Title, Time, Calories, Summary, Poster },
            { new: true, runValidators: true } // Return updated document and validate inputs
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.json({ message: 'Recipe updated successfully', Recipe: updatedRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Error updating recipe', error });
    }
});

app.delete('/api/recipes/:id', async (req, res) => {

    console.log('Deleting recipe with ID:', req.params.id);
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Recipe deleted successfully", recipe });

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});