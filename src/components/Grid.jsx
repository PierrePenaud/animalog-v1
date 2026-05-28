import ANIMAUX from "../data/animaux"
import GridCell from "./GridCell"

function Grid({grille}) {
  return (
    <div className="p-8 grid grid-cols-3 gap-8">

      {grille.map((animalId, index) => {
        const animal = ANIMAUX.find(a => a.id === animalId)
        return <GridCell key={index} animal={animal} index={index}/>
      })}
      
      
    </div>
  )
}

export default Grid