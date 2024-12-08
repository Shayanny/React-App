const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')


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

//Set up middleware to serve all static files (CSS, JS, etc.) from a public directory.
app.use(express.static('public'));

app.get('/api/recipes', (req, res) => {
    const recipes = [

        {
            "Title": "Simple Lemon Herb Chicken",
            "Time": "15 min",
            "Calories": "265",
            "type": "recipe",
            "imdbID": "tt4154756",
            "Summary": "This lemon-herb chicken is a simple, quick, and delicious dish. All you need are a few herbs, a lemon, and of course, the chicken! The amount of spices is completely up to you. You can add more or less according to your taste.",
            "Poster": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F01%2F26%2FSimple-Lemon-Herb-Chicken-2000.jpg&w=160&q=60&c=sc&poi=auto&orient=true&h=90"
        },
        {
            "Title": "Sesame Grilled Salmon",
            "Time": "25 min",
            "Calories": "406",
            "type": "recipe",
            "imdbID": "tt3498820",
            "Summary": "Delicious grilled sesame salmon. A very flavorful main dish. Great when served with grilled yellow bell peppers, green beans, and wild rice with herbs.",
            "Poster": "https://www.allrecipes.com/thmb/YSM5NQOOlyzP-kcI4UjZMwydTSg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1144548-e67757e47a32478fac80193da768cd99.jpg"
        }



    ];
    res.status(200).json({ myRecipes:recipes });
});


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});