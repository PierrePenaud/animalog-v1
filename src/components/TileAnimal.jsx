import { useDraggable } from "@dnd-kit/core"

function TileAnimal({ animal }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: animal.id,
  })
  return (
    <div ref={setNodeRef} {...listeners} {...attributes}
      className="w-20 h-20 rounded-2xl border-2 border-gray-200 
                    shadow-md flex items-center justify-center 
                    bg-white cursor-grab"
    >
      <img
        src={animal.image}
        alt={`${animal.type} ${animal.couleur}`}
        className="w-20 h-20 object-contain"
      />
    </div>
  );
}

export default TileAnimal
