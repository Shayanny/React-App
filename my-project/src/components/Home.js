import React from 'react';
import { Link } from 'react-router-dom';
import { GiForkKnifeSpoon } from "react-icons/gi"; // Import icon from react icons
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="page-container">
            <header className="hero-section">
                <h1 className="hero-title">Welcome to <GiForkKnifeSpoon classname = "icon" /> Munchies! </h1>
                <p className="hero-subtitle">
                    Discover, Create, and Savor your favorite recipes!
                </p>
                <div className="hero-buttons">
                    <Link to="/create" className="button">
                        Create Recipe
                    </Link>
                    <Link to="/read" className="button">
                        Browse Recipes
                    </Link>
                </div>
            </header>
            <section className="info-section">
                <h2 className="section-title">Why Choose Munchies?</h2>
                <p className="section-text">
                    Munchies is your one-stop destination for all things recipes. Whether you're
                    looking to share your culinary creations or discover new dishes, we've got
                    something for everyone!
                </p>
                <ul className="benefits-list">
                    <li> Save your favorite recipes</li>
                    <li> Easy-to-follow instructions</li>
                    <li> Add your own creative touch</li>
                </ul>
            </section>
            <section className="featured-section">
                <h2 className="section-title">Featured Recipes</h2>
                <div className="featured-items">
                    <div
                        className="featured-item"
                        style={{
                            backgroundImage: 'url("https://www.allrecipes.com/thmb/YSM5NQOOlyzP-kcI4UjZMwydTSg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1144548-e67757e47a32478fac80193da768cd99.jpg")',
                            backgroundPosition: 'center', // Centers the image
                            backgroundRepeat: 'no-repeat', // Prevents tiling
                        }}
                    >
                        <h3>Sesame Grilled Salmon</h3>
                        <p>Delicious grilled sesame salmon. A very flavorful main dish.</p>
                        <Link to="/read" className="button">Learn More</Link>
                    </div>
                    <div
                        className="featured-item"
                        style={{
                            backgroundImage: 'url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F01%2F26%2FSimple-Lemon-Herb-Chicken-2000.jpg&w=160&q=60&c=sc&poi=auto&orient=true&h=90")',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                        }}
                    >
                        <h3>Simple Lemon Herb Chicken</h3>
                        <p>This lemon-herb chicken is a simple, quick, and delicious dish.</p>
                        <Link to="/read" className="button">Learn More</Link>
                    </div>
                    <div
                        className="featured-item"
                        style={{
                            backgroundImage: 'url("https://www.allrecipes.com/thmb/Apm8-tS4DADYnne_fY1WJaRkPBc=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/45957-ChickenMakhaniIndianButterChicken-mfs-4X3-0037-7aa9a555bf3943baae20c5c3b0921375.jpg")',

                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                        }}
                    >
                        <h3>Chicken Makhani</h3>
                        <p>This butter chicken recipe, or chicken makhani, is one of my favorite Indian dishes.</p>
                        <Link to="/read" className="button">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>

    );
};



export default HomePage;
