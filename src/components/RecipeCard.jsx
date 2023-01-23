function RecipeCard({recipe}) {
    const {
        idMeal,
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        strSource,
    } = recipe;
    const ingredients = {};
    
    return (
        <div className="carousel-item">
            <div className="card card-compact card-bordered w-96 bg-base-100 shadow-xs">
                <figure>
                    <img className="" src={strMealThumb} alt={strMeal} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {strMeal}
                    </h2>
                    <p>{strCategory}</p>
                    <p>{strArea}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
