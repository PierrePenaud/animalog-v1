import GridCell from "./GridCell"

function Grid() {
  return (
    <div className="p-8 grid grid-cols-3 gap-8">

      {Array(9).fill(null).map((_, index) => (
        <GridCell key={index} animal={null} />
      ))}
      

    </div>
  )
}

export default Grid