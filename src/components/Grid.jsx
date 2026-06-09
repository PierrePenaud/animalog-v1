import ANIMAUX from "../data/animaux"
import GridCell from "./GridCell"

function Grid({grille}) {
  return (
    <div className="p-4 grid grid-cols-3 place-items-center gap-4 aspect-square bg-amber-50 rounded-lg shadow-md flex-1">

      {grille.map((animalId, index) => {
        const animal = ANIMAUX.find(a => a.id === animalId)
        return <GridCell key={index} animal={animal} index={index}/>
      })}
      
      
    </div>
  )
}

export default Grid