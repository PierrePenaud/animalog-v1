import GridCell from "./GridCell"

function Grid({grille}) {
  return (
    <div className="p-8 grid grid-cols-3 gap-8">

      {grille.map((animal, index) => (
        <GridCell key={index} animal={animal} />
      ))}
      

    </div>
  )
}

export default Grid