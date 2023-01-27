import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import {Link} from "react-router-dom";

function RecipeCard({recipe, isMyRecipe}) {
    const {
        id,
        strMeal,
        favorite,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        strSource,
    } = recipe;
    
    const handleClick = (e) => {
        const configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({"favorite": !favorite}),
        };
        const dbJson = (isMyRecipe) ? `http://localhost:4201/myRecipes/${id}` : `http://localhost:4201/recipes/${id}`;
        fetch(dbJson, configObj)
        .then(res => res.json())
        .then(data => setRecipeDetails({...recipeDetails, "favorite": !favorite}))
    }

    const smallImage = `${strMealThumb}/preview`;
    const isFavorite = (favorite) ? <FaStar /> : <FaRegStar />;
    const favTitle =  (favorite) ? "Remove from Favorites" : "Add to Favorites";
    const linkTo = (isMyRecipe) ? `/myRecipes/${id}` : `/recipes/${id}`;
    
    return (
        <div className="carousel-item">
            <div className="card card-compact card-bordered w-64 bg-base-100 shadow-xs mr-4">
                <figure>
                    <img
                        className="min-w-full"
                        src={smallImage}
                        alt={strMeal}
                        onError={(e) => e.target.src = strMealThumb} // If preview thumb is unavailable, use regular size.
                    />
                </figure>
                <div className="card-body">
                    <h3 className="card-title">{strMeal}</h3>
                    <p>
                        {strCategory}<br/>
                        {strArea}
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary btn-sm"
                            title={favTitle}
                            onClick={handleClick}
                        >
                            {isFavorite}
                        </button>
                        <Link
                            to={linkTo}
                            as="button"
                            className="btn btn-secondary btn-sm"
                            title="View Recipe"
                        >
                            <FaEye />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;