import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaEye, FaRegEye, FaRegStar, FaStar } from 'react-icons/fa';

function RecipeDetail() {
    const { id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        const dbJson = `http://localhost:4201/recipes/${id}`;
        fetch(dbJson)
        .then(res => res.json())
        .then(recipeDetails => setRecipeDetails(() => recipeDetails));
    }, []);

    const {
        favorite,
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        strSource,
    } = recipeDetails;

    const handleClick = () => {
        const configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({"favorite": !favorite}),
        };
        const dbJson = `http://localhost:4201/recipes/${id}`;
        fetch(dbJson, configObj)
        .then(res => res.json())
        .then(data => setRecipeDetails({...recipeDetails, "favorite": !favorite}))
    }

    const isFavorite = (favorite) ? <FaStar /> : <FaRegStar />;
    const favTitile =  (favorite) ? "Remove from Favorites" : "Add to Favorites";
    
    return (
        <>
            <h2 className="prose text-left font-bold mx-12">Recipe Details</h2>
            <div className="card card-compact w-auto shadow-xl mx-12">
                <figure>
                    <img
                        className="w-auto"
                        src={strMealThumb}
                        alt={strMeal}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strCategory}</p>
                    <p>{strArea}</p>
                    <p>{strInstructions}</p>
                    <h3 className="card-title">Ingredients:</h3>
                    <ul>
                        <li>{recipeDetails.strMeasure1} {recipeDetails.strIngredient1}</li>
                        <li>{recipeDetails.strMeasure2} {recipeDetails.strIngredient2}</li>
                        <li>{recipeDetails.strMeasure3} {recipeDetails.strIngredient3}</li>
                        <li>{recipeDetails.strMeasure4} {recipeDetails.strIngredient4}</li>
                        <li>{recipeDetails.strMeasure5} {recipeDetails.strIngredient5}</li>
                        <li>{recipeDetails.strMeasure6} {recipeDetails.strIngredient6}</li>
                        <li>{recipeDetails.strMeasure7} {recipeDetails.strIngredient7}</li>
                        <li>{recipeDetails.strMeasure8} {recipeDetails.strIngredient8}</li>
                        <li>{recipeDetails.strMeasure9} {recipeDetails.strIngredient9}</li>
                        <li>{recipeDetails.strMeasure10} {recipeDetails.strIngredient10}</li>
                        <li>{recipeDetails.strMeasure11} {recipeDetails.strIngredient11}</li>
                        <li>{recipeDetails.strMeasure12} {recipeDetails.strIngredient12}</li>
                        <li>{recipeDetails.strMeasure13} {recipeDetails.strIngredient13}</li>
                        <li>{recipeDetails.strMeasure14} {recipeDetails.strIngredient14}</li>
                        <li>{recipeDetails.strMeasure15} {recipeDetails.strIngredient15}</li>
                        <li>{recipeDetails.strMeasure16} {recipeDetails.strIngredient16}</li>
                        <li>{recipeDetails.strMeasure17} {recipeDetails.strIngredient17}</li>
                        <li>{recipeDetails.strMeasure18} {recipeDetails.strIngredient18}</li>
                        <li>{recipeDetails.strMeasure19} {recipeDetails.strIngredient19}</li>
                        <li>{recipeDetails.strMeasure20} {recipeDetails.strIngredient20}</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            title={favTitile}
                            onClick={handleClick}
                        >
                            {isFavorite}
                        </button>
                    </div>
                </div>
            </div>
            <br/><br/>
        </>
    );
}

export default RecipeDetail;
