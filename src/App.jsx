import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";

function App() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        const dbJson = "http://localhost:3000/meals"; // 
        // const mealDB = "http://www.themealdb.com/api/json/v1/1/search.php?f=a"; // External Meal DB
        fetch(dbJson)
        .then(res => res.json())
        .then(recipes => setRecipes(() => recipes));
    }, []);

    const recipeRow = recipes.map(recipe =>
        <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
        />
    );

    return (
        <>
            <Header />
            <h1 className="text-3xl font-bold text-red-400 text-left">
                Mobile Menu
            </h1>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                        {/* Watch video on programmatic navigation 
                            specifically ProjectDetails.js from sidenav
                        */}
                        {/* Learn v6 version of NavLink */}
                        {/* Learn useNavigate &
                            useParams will give access to userIds
                                See node.bcrypt => WILL BE USED IN PHASE 4
                                See auth0
                            .map is undefined can be solved:
                            React Query => tanstack 
                                has refetch
                        */}
                </Routes>
            </Router>

            <h2>Recipe Group 1</h2>
            <div className="carousel w-100 carousel-right max-w-md p-0 space-x-0">
                {recipeRow}
            </div>

            <h2>Recipe Group 2</h2>
            <div className="carousel w-100 carousel-right max-w-md p-4 space-x-4">
                {recipeRow}
            </div>

            <h2>Recipe Group 3</h2>
            <div className="carousel w-100 carousel-right max-w-md p-4 space-x-4">
                {recipeRow}
            </div>

            <h2>Recipe Group 4</h2>
            <div className="carousel w-100 carousel-right max-w-md p-4 space-x-4">
                {recipeRow}
            </div>

            <h2>Recipe Group 5</h2>
            <div className="carousel w-100 carousel-right max-w-md p-4 space-x-4">
                {recipeRow}
            </div>
            <Footer />
        </>
    );
}

export default App;
