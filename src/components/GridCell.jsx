import TileAnimal from "./TileAnimal";

function GridCell ({ animal, prefilled }) {
    return (
        <div>
            {animal ? <TileAnimal animal={animal} /> : <div>+</div>}
        </div>
    )
}

export default GridCell