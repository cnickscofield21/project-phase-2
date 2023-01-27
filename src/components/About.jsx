import {Link} from "react-router-dom";

function About() {
    return (
        <div className="flex min-h-full items-center justify-center py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <h2 className="prose text-left font-bold ml-6">About Mobile Chef</h2>
                <p>Mobile Chef is built on&nbsp;
                    <Link className="link link-accent" 
                        to="https://www.themealdb.com/api.php"
                        target="_blank"
                    >The Meal DB</Link> open API which contains recipes sourced from
                        cooks around the world. Mobile Chef extends upon this
                        vast library of culinary masterpieces with the following
                        features:
                </p>
                <ul className="list-disc">
                    <li className="my-2">
                        Create a personal <em>Favorites List</em> to keep the best 
                        of the library at your fingertips.
                    </li>
                    <li className="my-2">
                        Add your own recipes to your collection. No more lost recipe
                        cards.
                    </li>
                    <li className="my-2">
                        Search for recipes by ingredient. The perfect solution when
                        you're just not sure where to start.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;