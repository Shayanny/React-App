import Recipes from "./Recipes";

const ReadPage = () => {

    const data = [
        
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
            },
           
    ];

    return (
        <div style={styles.container}>
            <Recipes myRecipes ={data}/>
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
