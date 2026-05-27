import TileAnimal from "./TileAnimal";

function Reserve ({ animaux }) {
    return(
        <div className="flex flex-wrap gap-4">
            {animaux.map((animal) => (
                <TileAnimal key={animal.id} animal={animal}/>
            ))}
        </div>
    )
}

export default Reserve