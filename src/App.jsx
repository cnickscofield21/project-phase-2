import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home  from "./components/Home";
import About  from "./components/About";
import Contact  from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";

function App() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        const dbJson = "http://localhost:4201/meals"; // 
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
            <Router>
                <Routes>
                    <Route path="/" element={<Home recipeRow={recipeRow}/>} />
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
            <Footer />
        </>
    );
}

export default App;
