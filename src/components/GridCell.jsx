import TileAnimal from "./TileAnimal";
import { useDroppable } from "@dnd-kit/core";

function GridCell ({ animal, index }) {
    const { setNodeRef } = useDroppable({
        id: index,
    })
    return (
        <div ref={setNodeRef} className="w-16 h-16">
            {animal ? <TileAnimal animal={animal} /> : <div>+</div>}
        </div>
    )
}

export default GridCell