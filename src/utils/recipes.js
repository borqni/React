const getRecipes = async (length) => {
    const promise = await fetch(`http://localhost:9999/api/recipe?length=${length}`)
    const recipes = await promise.json()
    return recipes
}

export default getRecipes