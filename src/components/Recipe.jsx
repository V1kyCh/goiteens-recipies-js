import { RecipeInfo } from "./RecipeInfo";
import { CiTimer } from "react-icons/ci";
import { GiEating } from "react-icons/gi";
import { FaFeatherPointed } from "react-icons/fa6";
import { GiDiamondHard } from "react-icons/gi";

export const Receptive = ({ recipe }) => {
    console.log(recipe)
    return (
        <li>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
            <div className="box">
                <p>Загальне:</p>
                <RecipeInfo text='Час приготування:' fromRecept={recipe.time} icon={<CiTimer />} />
                <RecipeInfo text='Порції:' fromRecept={recipe.servings} icon={<GiEating />} />
                <RecipeInfo text='Калорії:' fromRecept={recipe.calories} icon={<FaFeatherPointed />} />
                <RecipeInfo text='Складність:' fromRecept={recipe.difficulty} icon={<GiDiamondHard />} />
            </div>
        </li>
    )
}

