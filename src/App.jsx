import GridCell from "./components/GridCell"
import ANIMAUX from './data/animaux'

function App() {
  return (
    <div className="p-8 grid grid-cols-3 gap-8">

      {Array(9).fill(null).map((_, index) => (
        <GridCell key={index} animal={null} />
      ))}
      

    </div>
  )
}

export default App