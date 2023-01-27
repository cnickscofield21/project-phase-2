import {useEffect, useState} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// FIXME: Testing...
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Home  from "./components/Home";
import About  from "./components/About";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import MyRecipeDetail from "./components/MyRecipeDetail";
import RecipeForm from "./components/RecipeForm";
import RecipeEditForm from "./components/RecipeEditForm";
import NotFound from "./components/NotFound";

function App() {
    const [theme, setTheme] = useState(getTheme);
    const [recipes, setRecipes] = useState([]);
    const [recipeId, setRecipeId] = useState(null);
    const [myRecipes, setMyRecipes] = useState([]);
    const [myRecipeId, setMyRecipeId] = useState(null);
    
    useEffect(() => {
        const dbJson = "http://localhost:4201/recipes";
        fetch(dbJson)
        .then(res => res.json())
        .then(data => setRecipes(() => data));
    }, []);

    useEffect(() => {
        const dbJson = "http://localhost:4201/myRecipes";
        fetch(dbJson)
        .then(res => res.json())
        .then(myRecipes => setMyRecipes(() => myRecipes));
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    function getTheme() {
       // If theme is not set, DaisyUI will set theme based on system settings.
        return (localStorage.getItem("recipeTheme")) ? localStorage.getItem("recipeTheme") : "";
    };

    const onChangeTheme = (newTheme) => {
        localStorage.setItem("recipeTheme", newTheme);
        setTheme(newTheme);
    }
    
    const onAddMyRecipe = (newMyRecipe) => {
        setMyRecipes(myRecipes => [...myRecipes, newMyRecipe]);
    }

    const onUpdateMyRecipe = (updatedMyRecipe) => {
        const updatedMyRecipes = myRecipes.map(ogMyRecipe => {
            if (ogMyRecipe.id === updatedMyRecipe.id) {
                return updatedMyRecipe;
            } else {
                return ogMyRecipe;
            }
        });

        setMyRecipes(updatedMyRecipes);
    }

    const onDeleteMyRecipe = (deletedMyRecipe) => {
        const updatedMyRecipes = myRecipes.filter(
          (myRecipe) => myRecipe.id !== deletedMyRecipe.id
        );
        setProjects(updatedMyRecipes);
    };

    const completeEditing = () => {
        setMyRecipeId(null);
    };

    const enterMyRecipeEditModeFor = (myRecipeId) => {
        setMyRecipeId(myRecipeId);
    };

    return (
        <>
            <Header onChangeTheme={onChangeTheme} currentTheme={theme} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                recipes={recipes}
                                myRecipes={myRecipes}
                            />
                        }
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />
                        
                    <Route
                        path="/recipes/new"
                        element={
                            <RecipeForm 
                                onAddMyRecipe={onAddMyRecipe}
                            />
                        }
                    />
                    
                    <Route
                        path="/recipes/:id/edit"
                        element={
                            <RecipeEditForm
                                recipeId={recipeId}
                                completeEditing={completeEditing}
                                onUpdateMyRecipe={onUpdateMyRecipe}
                            />
                        }
                    />

                    <Route
                        path="/recipes/:id"
                        element={
                            <RecipeDetail recipeId={recipeId} />
                        }
                    />

                    <Route
                        path="/myRecipes/:id"
                        element={
                            <MyRecipeDetail myRecipeId={myRecipeId} />
                        }
                    />
                        
                    <Route
                        path="/recipes"
                        element={
                            <RecipeList
                                recipes={recipes}
                                myRecipes={myRecipes}
                                enterMyRecipeEditModeFor={enterMyRecipeEditModeFor}
                            />
                        }
                    />

                    <Route path="*" element={<NotFound />} />
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
            <Footer />
        </>
    );
}

export default App;
