function Home ({recipeRow}) {
    return (
        <>
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
        </>
    )
}

export default Home;