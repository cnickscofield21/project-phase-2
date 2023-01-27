import RecipeCard from "./RecipeCard";

function Home ({recipes, myRecipes}) {
    const getRandomRecipes = (recipes) => { // TODO: Finish random selection logic.

        // TODO: This is a hack if a single object, outside of an array is sent.
        // example: recipes = {} vs [{}];
        if (!Array.isArray(recipes)) {
            recipes = [recipes];
        }

        const rLen = recipes.length;
        let randomSelections = [];
        let randomIndicies = [];
        let i = 0;

        if (rLen > -1) {
            if (rLen > 12) {
                for (i; i < 12 ; i += 1) {
                    let randomIndex = Math.floor(Math.random() * rLen);
                    if (randomIndicies.indexOf(randomIndex) === -1) { // Prevent duplicates
                        randomIndicies.push(randomIndex);
                        randomSelections.push(recipes[randomIndex]);
                    } else {
                        i -= 1;
                    }
                }
            } else {
                randomSelections = [...recipes];
            }
        }

        return randomSelections;
    }

    const tempRandomRecipeRow = getRandomRecipes(recipes);
    const tempRandomMyRecipeRow = getRandomRecipes(myRecipes);

    const randomRecipeRow = tempRandomRecipeRow.map(tempRecipe => {
        return (
            <RecipeCard 
                key={tempRecipe.id}
                recipe={tempRecipe}
                isMyRecipe={false}
                />
                )
            });
            
    const randomMyRecipeRow = tempRandomMyRecipeRow.map(tempMyRecipe => {
        return (
            <RecipeCard 
                key={tempMyRecipe.id}
                recipe={tempMyRecipe}
                isMyRecipe={true}
            />
        )
    });

    return (
        <>
            <h2 className="prose text-left font-bold ml-6">Today's Picks</h2>
            <div className="carousel min-w-full carousel-right space-x-0 p-6">
                {randomRecipeRow}
            </div>

            <h2 className="prose text-left font-bold ml-6">My Recipes</h2>
            <div className="carousel min-w-full carousel-right space-x-0 p-6">
                {randomMyRecipeRow}
            </div>
            <br/>
            <br/>
        </>
    )
}

export default Home;