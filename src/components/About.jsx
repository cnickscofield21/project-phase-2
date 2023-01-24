function About() {
    return (
        <>
            <h2>About Mobile Chef</h2>
            <p>Mobile Chef is built on
                <a href="https://www.themealdb.com/api.php" target="_blank" >The
                Meal DB</a> open API which contains recipes sourced from cooks 
                around the world. Mobile Chef extends upon this vast library of
                culinary masterpieces with the following features:
            </p>
            <ul>
                <li>
                    Create a personal <em>Favorites List</em> to keep the best 
                    of the library at your fingertips.
                </li>
                <li>
                    Add your own recipes to your collection. No more lost recipe
                    cards.
                </li>
                <li>
                    Search for recipes by ingredient. The perfect solution when
                    you're just not sure where to start.
                </li>
            </ul>
        </>
    )
}

export default About;