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

//Error Hnadling middleware
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
    Poster:  String,

});

// Create a Mongoose model from the schema
const Recipe = mongoose.model('Recipe', recipeSchema);


//Set up middleware to serve all static files (CSS, JS, etc.) from a public directory.
app.use(express.static('public'));


//Method to retrice all recipes
app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes', error });
    }
  });


//method to retrieve a specific a recipe by its ID
app.get('/api/recipes/:id', async(req, res)=>{

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
app.post('/api/recipes', async (req, res)=>{

    const { Title, Time, Calories, Summary, Poster } = req.body;
   
    const newRecipe = new Recipe({ Title, Time, Calories, Summary, Poster});
    await newRecipe.save();

    //Add poster here...
   
    res.status(201).json({ message: 'Recipe created successfully', Recipe: newRecipe });
    })



//Serverside code for edit
app.get('/api/recipes/:id', async (req, res) => {
    let recipe = await Recipe.findById({ _id: req.params.id });
    res.send(recipe);
});

app.put('/api/recipes/:id', async (req, res) => {
    let recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(recipe);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});