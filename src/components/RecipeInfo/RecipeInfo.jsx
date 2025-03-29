export const RecipeInfo = ({text, icon, fromRecept}) =>{
    return (
        <p className="recipeDescription"> {icon} {text} {fromRecept}</p>
    )
}