import { useEffect, useState } from "react";

function RecipeForm({ onAddMyRecipe }) {
    const initialState = {
        id: "",
        favorite: true,
        strMeal: "",
        strCategory: "",
        strArea: "",
        strInstructions: "",
        strMealThumb: "",
        strTags: "",
        strYoutube: "",
        strIngredient1: "",
        strIngredient2: "",
        strIngredient3: "",
        strIngredient4: "",
        strIngredient5: "",
        strIngredient6: "",
        strIngredient7: "",
        strIngredient8: "",
        strIngredient9: "",
        strIngredient10: "",
        strIngredient11: "",
        strIngredient12: "",
        strIngredient13: "",
        strIngredient14: "",
        strIngredient15: "",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strMeasure1: "",
        strMeasure2: "",
        strMeasure3: "",
        strMeasure4: "",
        strMeasure5: "",
        strMeasure6: "",
        strMeasure7: "",
        strMeasure8: "",
        strMeasure9: "",
        strMeasure10: "",
        strMeasure11: "",
        strMeasure12: "",
        strMeasure13: "",
        strMeasure14: "",
        strMeasure15: "",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: ""
    };
    const testFormData = {
        id: "",
        favorite: true,
        strMeal: "Sausage and Shrimp Jambalaya",
        strCategory: "Seafood",
        strArea: "American",
        strInstructions: "Step 1. Place butter and sausage in a large stockpot over medium heat; cook and stir until sausage begins to brown, 5 to 6 minutes.\nStep 2. Stir in paprika, cumin, and cayenne; cook for 1 minute.\nStep 3. Stir tomatoes, celery, green pepper, green onions, salt, and bay leaf into the sausage mixture.\nStep 4. Add brown rice and stir to combine. Stir in chicken stock, bring it to a simmer, then turn heat to low. Cover and cook until rice is just tender, about 45 minutes.\nStep 5. Stir in shrimp, replace lid and cook until shrimp are cooked through, about 5 minutes. Season with salt and black pepper.",
        strMealThumb: "/src/assets/jambalaya.jpg",
        strTags: "Cajun",
        strYoutube: "https://www.youtube.com/watch?v=peS6-37d2g4",
        strIngredient1:  "butter",
        strIngredient2:  "andouille sausage, cut into 1/4-inch slices",
        strIngredient3:  "ground paprika",
        strIngredient4:  "ground cumin",
        strIngredient5:  "cayenne pepper",
        strIngredient6:  "diced tomatoes",
        strIngredient7:  "celery, sliced 1/4 inch thick",
        strIngredient8:  "large green bell pepper, diced",
        strIngredient9:  "green onions, thinly sliced",
        strIngredient10: "salt",
        strIngredient11: "bay leaf",
        strIngredient12: "uncooked brown rice",
        strIngredient13: "chicken stock",
        strIngredient14: "large shrimp, peeled and deveined",
        strIngredient15: "salt and ground black pepper to taste",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strMeasure1:  "2 tbsp",
        strMeasure2:  "8 oz",
        strMeasure3:  "2 tbsp",
        strMeasure4:  "1 tbsp",
        strMeasure5:  "½ tsp",
        strMeasure6:  "½ cup",
        strMeasure7:  "2 stalks",
        strMeasure8:  "1",
        strMeasure9:  "4",
        strMeasure10: "1 tsp",
        strMeasure11: "1",
        strMeasure12: "1 cup",
        strMeasure13: "3 cups",
        strMeasure14: "1 pound",
        strMeasure15: "dash",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: "https://www.allrecipes.com/recipe/220126/chef-johns-sausage-shrimp-jambalaya/"
    };
    const [formData, setFormData] = useState(initialState);
    const [isTest, setIsTest] = useState(false);

    useEffect(() => {
        console.log('isTest: ', isTest);
        if (sessionStorage.getItem("isTest")) {
            setIsTest(isTest => isTest);
            setFormData(formData => testFormData)
        }
    }, [])
    
    const handleTest = () => {
        sessionStorage.setItem("isTest", true)
        setFormData((formData) => ({ ...testFormData, "favorite": true }));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...formData, favorite: true })
        };

        fetch("http://localhost:4201/myRecipes", configObj)
            .then((res) => res.json())
            .then((myRecipe) => {
                onAddMyRecipe(myRecipe);
                setFormData(formData => initialState);
            });
    };

    return (
        <div>
            <h2 className="prose text-left font-bold ml-10">Add New Recipe</h2>
            <form className="m-5" autoComplete="off" onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-base px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeal">
                                    Meal Name
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeal"
                                    name="strMeal"
                                    placeholder="Ex: Rack of Lamb"
                                    onChange={handleChange}
                                    value={formData.strMeal}
                                    />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label className="label min-w-full" htmlFor="strCategory">
                                    Category
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strCategory"
                                    name="strCategory"
                                    placeholder="Ex: Dessert, Beef, Chicken, etc."
                                    onChange={handleChange}
                                    value={formData.strCategory}
                                    />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strArea">
                                    Area of Origin
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strArea"
                                    name="strArea"
                                    placeholder="Ex: American, Italian, Mexican, etc."
                                    onChange={handleChange}
                                    value={formData.strArea}
                                    />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strTags">
                                    Tags
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strTags"
                                    name="strTags"
                                    placeholder="Ex: Fruity, Breakfast, Soup, etc."
                                    onChange={handleChange}
                                    value={formData.strTags}
                                    />
                            </div>
                            <div className="col-span-10 sm:col-span-6">
                                <label
                                    className="label"
                                    htmlFor="strInstructions"
                                    >
                                    Instructions
                                </label>
                                <textarea
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strInstructions"
                                    name="strInstructions"
                                    placeholder="Ex: Preheat oven to 450°F, butter baking sheet, etc."
                                    onChange={handleChange}
                                    value={formData.strInstructions}
                                    ></textarea>
                            </div>
                            <div className="col-span-10 sm:col-span-6">
                                <label className="label" htmlFor="strMealThumb">
                                    Image Address
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMealThumb"
                                    name="strMealThumb"
                                    placeholder="Ex: https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe.jpg"
                                    onChange={handleChange}
                                    value={formData.strMealThumb}
                                    />
                            </div>
                            <div className="col-span-10 sm:col-span-6">
                                <label className="label" htmlFor="strYoutube">
                                    YouTube Link
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strYoutube"
                                    name="strYoutube"
                                    placeholder="Ex: https://youtu.be/BFrkRFgHLVk"
                                    onChange={handleChange}
                                    value={formData.strYoutube}
                                    />
                            </div>
                            <div className="col-span-10 sm:col-span-6">
                                <label className="label" htmlFor="strSource">
                                    Source
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strSource"
                                    name="strSource"
                                    placeholder="Ex: https://thecozycook.com/easy-lasagna-recipe/"
                                    onChange={handleChange}
                                    value={formData.strSource}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label min-w-full" htmlFor="strMeasure1">
                                    Qty &amp; Unit of Measure #: 1
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure1"
                                    name="strMeasure1"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure1}
                                    />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient1"
                                    >
                                    Ingredient #: 1
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient1"
                                    name="strIngredient1"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient1}
                                    />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure2">
                                    Qty &amp; Unit of Measure #: 2
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure2"
                                    name="strMeasure2"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure2}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient2"
                                >
                                    Ingredient #: 2
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient2"
                                    name="strIngredient2"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient2}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure3">
                                    Qty &amp; Unit of Measure #: 3
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure3"
                                    name="strMeasure3"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure3}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient3"
                                >
                                    Ingredient #: 3
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="1$"
                                    name="strIngredient3"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient3}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure4">
                                    Qty &amp; Unit of Measure #: 4
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure4"
                                    name="strMeasure4"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure4}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient4"
                                >
                                    Ingredient #: 4
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient4"
                                    name="strIngredient4"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient4}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure5">
                                    Qty &amp; Unit of Measure #: 5
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure5"
                                    name="strMeasure5"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure5}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient5"
                                >
                                    Ingredient #: 5
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient5"
                                    name="strIngredient5"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient5}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure6">
                                    Qty &amp; Unit of Measure #: 6
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure6"
                                    name="strMeasure6"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure6}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient6"
                                >
                                    Ingredient #: 6
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient6"
                                    name="strIngredient6"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient6}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure7">
                                    Qty &amp; Unit of Measure #: 7
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure7"
                                    name="strMeasure7"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure7}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient7"
                                >
                                    Ingredient #: 7
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient7"
                                    name="strIngredient7"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient7}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure8">
                                    Qty &amp; Unit of Measure #: 8
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure8"
                                    name="strMeasure8"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure8}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient8"
                                >
                                    Ingredient #: 8
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient8"
                                    name="strIngredient8"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient8}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure9">
                                    Qty &amp; Unit of Measure #: 9
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure9"
                                    name="strMeasure9"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure9}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient9"
                                >
                                    Ingredient #: 9
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient9"
                                    name="strIngredient9"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient9}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure10">
                                    Qty &amp; Unit of Measure #: 10
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure10"
                                    name="strMeasure10"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure10}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient10"
                                >
                                    Ingredient #: 10
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient10"
                                    name="strIngredient10"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient10}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure11">
                                    Qty &amp; Unit of Measure #: 11
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure11"
                                    name="strMeasure11"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure11}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient11"
                                >
                                    Ingredient #: 11
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient11"
                                    name="strIngredient11"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient11}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure12">
                                    Qty &amp; Unit of Measure #: 12
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure12"
                                    name="strMeasure12"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure12}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient12"
                                >
                                    Ingredient #: 12
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient12"
                                    name="strIngredient12"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient12}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure13">
                                    Qty &amp; Unit of Measure #: 13
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure13"
                                    name="strMeasure13"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure13}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient13"
                                >
                                    Ingredient #: 13
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient13"
                                    name="strIngredient13"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient13}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure14">
                                    Qty &amp; Unit of Measure #: 14
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure14"
                                    name="strMeasure14"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure14}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient14"
                                >
                                    Ingredient #: 14
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient14"
                                    name="strIngredient14"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient14}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure15">
                                    Qty &amp; Unit of Measure #: 15
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure15"
                                    name="strMeasure15"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure15}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient15"
                                >
                                    Ingredient #: 15
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient15"
                                    name="strIngredient15"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient15}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure16">
                                    Qty &amp; Unit of Measure #: 16
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure16"
                                    name="strMeasure16"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure16}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient16"
                                >
                                    Ingredient #: 16
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient16"
                                    name="strIngredient16"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient16}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure17">
                                    Qty &amp; Unit of Measure #: 17
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure17"
                                    name="strMeasure17"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure17}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient17"
                                >
                                    Ingredient #: 17
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient17"
                                    name="strIngredient17"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient17}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure18">
                                    Qty &amp; Unit of Measure #: 18
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure18"
                                    name="strMeasure18"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure18}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient18"
                                >
                                    Ingredient #: 18
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient18"
                                    name="strIngredient18"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient18}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure19">
                                    Qty &amp; Unit of Measure #: 19
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure19"
                                    name="strMeasure19"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure19}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient19"
                                >
                                    Ingredient #: 19
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient19"
                                    name="strIngredient19"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient19}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="label" htmlFor="strMeasure20">
                                    Qty &amp; Unit of Measure #: 20
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strMeasure20"
                                    name="strMeasure20"
                                    placeholder="Ex: 2 tsp or 1 1/2 cups"
                                    onChange={handleChange}
                                    value={formData.strMeasure20}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    className="label"
                                    htmlFor="strIngredient20"
                                >
                                    Ingredient #: 20
                                </label>
                                <input
                                    className="input input-bordered min-w-full"
                                    type="text"
                                    id="strIngredient20"
                                    name="strIngredient20"
                                    placeholder="Ex: Cocoa, Flour, Butter, etc."
                                    onChange={handleChange}
                                    value={formData.strIngredient20}
                                />
                            </div>
                            <div className="col-span-8 sm:col-span-6">
                                <button
                                    className="btn btn-primary min-w-full"
                                    type="submit"
                                    onSubmit={handleSubmit}
                                >Submit</button>
                            </div>
                            <div className="col-span-2 sm:col-span-6">
                                <button
                                    className="btn btn-accent min-w-full"
                                    type="button"
                                    onClick={handleTest}
                                >Test</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <br />
            <br />
        </div>
    );
}

export default RecipeForm;
