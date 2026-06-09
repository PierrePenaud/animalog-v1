import ANIMAUX from "../data/animaux";
import TileAnimal from "./TileAnimal";

function Reserve ({ animaux }) {
    return(
        <div className="p-4 grid grid-cols-3 place-items-center gap-4 aspect-square gap-4 flex-1">
            {animaux.map((animal) => (
                <TileAnimal key={animal.id} animal={animal}/>
            ))}
        </div>
    )
}

export default Reserve