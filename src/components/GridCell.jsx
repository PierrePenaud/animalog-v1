import TileAnimal from "./TileAnimal";
import { useDroppable } from "@dnd-kit/core";

function GridCell ({ animal, index }) {
    const { setNodeRef } = useDroppable({
        id: index,
    })
    return (
        <div ref={setNodeRef} className="w-16 h-16 rounded-2xl border-2 border-gray-200 flex items-center justify-center">
            {animal ? <TileAnimal animal={animal} /> : <div>+</div>}
        </div>
    )
}

export default GridCell